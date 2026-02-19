import { useState } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { MaterialRow } from '../components/MaterialRow';
import { Modal } from '../components/Modal';
import { MaterialForm } from '../components/MaterialForm';
import type { Material } from '../types';

export const Inventario = () => {
    const usuario = useAppStore(state => state.usuario);
    const allMateriales = useAppStore(state => state.materiales);
    const deleteMaterial = useAppStore(state => state.deleteMaterial);
    const agregarMaterial = useAppStore(state => state.agregarMaterial);
    const editarMaterial = useAppStore(state => state.editarMaterial);
    const activeFilter = useAppStore(state => state.activeFilter);
    const setActiveFilter = useAppStore(state => state.setActiveFilter);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);

    // Filter materials by current user first
    const userMateriales = allMateriales.filter(m => m.userId === usuario?.id);

    // Then apply active filter
    const materialsFiltrados = userMateriales.filter(m => {
        if (activeFilter === 'REPARACION') return m.stockReparacion > 0;
        if (activeFilter === 'BAJA') return m.stockDisponible < 3;
        return true;
    });

    const handleEdit = (material: Material) => {
        setEditingMaterial(material);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setEditingMaterial(null);
        setIsModalOpen(false);
    };

    const handleSubmit = (data: Omit<Material, 'id'>) => {
        if (editingMaterial) {
            editarMaterial(editingMaterial.id, data);
        } else {
            agregarMaterial(data);
        }
        handleClose();
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-in fade-in duration-300">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-white">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-800">Inventario de Equipos</h2>
                    {activeFilter !== 'TODOS' && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 flex items-center gap-2">
                            Filtro: {activeFilter === 'REPARACION' ? 'En Mantenimiento' : 'Bajo Stock'}
                            <button
                                onClick={() => setActiveFilter('TODOS')}
                                className="hover:text-blue-600"
                            >
                                &times;
                            </button>
                        </span>
                    )}
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-sm"
                >
                    <svg className="w-5 h-5 stroke-current fill-none"><use href="/sprites.svg#icon-plus" /></svg>
                    Añadir Material
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-6 py-4">Nombre</th>
                            <th className="px-6 py-4">Categoría</th>
                            <th className="px-6 py-4 text-center">Stock</th>
                            <th className="px-6 py-4">Estado</th>
                            <th className="px-6 py-4">Ubicación</th>
                            <th className="px-6 py-4 text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {materialsFiltrados.map(item => (
                            <MaterialRow
                                key={item.id}
                                material={item}
                                onDelete={deleteMaterial}
                                onEdit={handleEdit}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {materialsFiltrados.length === 0 && (
                <div className="p-10 text-center text-gray-500">
                    {activeFilter === 'TODOS'
                        ? 'No hay materiales registrados. ¡Empieza añadiendo uno!'
                        : 'No hay materiales que coincidan con este filtro.'}
                    {activeFilter !== 'TODOS' && (
                        <button
                            onClick={() => setActiveFilter('TODOS')}
                            className="block mx-auto mt-4 text-blue-600 hover:underline"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
            )}

            {/* MODAL PARA AÑADIR / EDITAR */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleClose}
                title={editingMaterial ? "Editar Material" : "Nuevo Material"}
            >
                <MaterialForm
                    onClose={handleClose}
                    onSubmit={handleSubmit}
                    initialData={editingMaterial || undefined}
                    key={editingMaterial ? editingMaterial.id : 'new'}
                />
            </Modal>
        </div>
    );
};