import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';
import type { Material } from '../types';
import { initialMateriales } from '../data/initialData';

interface MaterialsContextType {
    materiales: Material[];
    agregarMaterial: (nuevo: Omit<Material, 'id'>) => void;
    deleteMaterial: (id: string) => void;
    editarMaterial: (id: string, actualizado: Omit<Material, 'id'>) => void;
    activeFilter: 'TODOS' | 'REPARACION' | 'BAJA';
    setActiveFilter: (filter: 'TODOS' | 'REPARACION' | 'BAJA') => void;
}

const MaterialsContext = createContext<MaterialsContextType | undefined>(undefined);

export const MaterialsProvider = ({ children }: { children: ReactNode }) => {
    const [materiales, setMateriales] = useState<Material[]>(() => {
        const storage = localStorage.getItem('materiales');
        if (storage) {
            try {
                const parsed = JSON.parse(storage);
                //Modificar los materiales en timpo real
                if (parsed.length > 0 && 'stock' in parsed[0]) {
                    return parsed.map((item: any) => ({
                        id: item.id,
                        nombre: item.nombre,
                        categoria: item.categoria,
                        ubicacion: item.ubicacion,
                        stockDisponible: item.estado === 'DISPONIBLE' ? item.stock : 0,
                        stockReparacion: item.estado === 'REPARACION' ? item.stock : 0,
                        stockBaja: item.estado === 'BAJA' ? item.stock : 0
                    }));
                }
                return parsed;
            } catch (e) {
                console.error("Ocurrio un problema parseando los materialess", e);
                return initialMateriales;
            }
        }
        return initialMateriales;
    });

    useEffect(() => {
        localStorage.setItem('materiales', JSON.stringify(materiales));
    }, [materiales]);

    const agregarMaterial = (nuevo: Omit<Material, 'id'>) => {
        const materialConId = { ...nuevo, id: crypto.randomUUID() };
        setMateriales(prev => [...prev, materialConId]);
    };

    const deleteMaterial = (id: string) => {
        setMateriales(prev => prev.filter(m => m.id !== id));
    };

    const editarMaterial = (id: string, actualizado: Omit<Material, 'id'>) => {
        setMateriales(prev => prev.map(m => m.id === id ? { ...actualizado, id } : m));
    };

    const [activeFilter, setActiveFilter] = useState<'TODOS' | 'REPARACION' | 'BAJA'>('TODOS');

    return (
        <MaterialsContext.Provider value={{
            materiales,
            agregarMaterial,
            deleteMaterial,
            editarMaterial,
            activeFilter,
            setActiveFilter
        }}>
            {children}
        </MaterialsContext.Provider>
    );
};

export const useMaterialsContext = () => {
    const context = useContext(MaterialsContext);
    if (!context) {
        throw new Error('Sin MaterialsProvider esto no funciona bb');
    }
    return context;
};
