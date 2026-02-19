

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Material, Usuario } from '../types';
import { initialMateriales, initialUsuarios } from '../data/initialData';


interface MaterialsSlice {
    materiales: Material[];
    activeFilter: 'TODOS' | 'REPARACION' | 'BAJA';
    agregarMaterial: (nuevo: Omit<Material, 'id'>) => void;
    deleteMaterial: (id: string) => void;
    editarMaterial: (id: string, actualizado: Omit<Material, 'id'>) => void;
    setActiveFilter: (filter: 'TODOS' | 'REPARACION' | 'BAJA') => void;
}

interface AuthSlice {
    usuario: Usuario | null;
    usuarios: Usuario[];
    login: (user: Usuario) => void;
    register: (user: Omit<Usuario, 'id'>) => boolean;
    updateUser: (user: Partial<Usuario>) => void;
    updatePassword: (currentPassword: string, newPassword: string) => boolean;
    logout: () => void;
}


export const useAppStore = create<MaterialsSlice & AuthSlice>()(
    devtools(
        persist(
            (set) => ({

                usuario: null,
                usuarios: initialUsuarios,

                materiales: initialMateriales,
                activeFilter: 'TODOS',

                login: (user) => set({ usuario: user }),

                register: (newUser) => {
                    let success = false;
                    set((state) => {
                        // Check if email already exists
                        if (state.usuarios.some(u => u.email === newUser.email)) {
                            success = false;
                            return state;
                        }
                        success = true;
                        const newUserId = crypto.randomUUID();

                        // Create a copy of initial materials for the new user
                        const newUserMaterials = initialMateriales.map(material => ({
                            ...material,
                            id: crypto.randomUUID(), // New unique ID for each material
                            userId: newUserId // Assign to new user
                        }));

                        return {
                            usuarios: [
                                ...state.usuarios,
                                { ...newUser, id: newUserId }
                            ],
                            materiales: [
                                ...state.materiales,
                                ...newUserMaterials
                            ]
                        };
                    });
                    return success;
                },

                updateUser: (userUpdates) => set((state) => ({
                    usuario: state.usuario ? { ...state.usuario, ...userUpdates } : null,
                    usuarios: state.usuarios.map(u =>
                        u.id === state.usuario?.id ? { ...u, ...userUpdates } : u
                    )
                })),

                updatePassword: (currentPassword, newPassword) => {
                    let success = false;
                    set((state) => {
                        if (!state.usuario || state.usuario.password !== currentPassword) {
                            success = false;
                            return state;
                        }
                        success = true;
                        return {
                            usuario: { ...state.usuario, password: newPassword },
                            usuarios: state.usuarios.map(u =>
                                u.id === state.usuario?.id ? { ...u, password: newPassword } : u
                            )
                        };
                    });
                    return success;
                },

                logout: () => set({ usuario: null }),

                agregarMaterial: (nuevo) =>
                    set((state) => ({
                        materiales: [
                            ...state.materiales,
                            { ...nuevo, id: crypto.randomUUID(), userId: state.usuario?.id || '' },
                        ],
                    })),

                deleteMaterial: (id) =>
                    set((state) => ({
                        materiales: state.materiales.filter((m) => m.id !== id),
                    })),

                editarMaterial: (id, actualizado) =>
                    set((state) => ({
                        materiales: state.materiales.map((m) =>
                            m.id === id ? { ...actualizado, id } : m
                        ),
                    })),

                setActiveFilter: (filter) => set({ activeFilter: filter })
            }),
            { name: 'kinvtrue-storage', }
        )
    )
);
