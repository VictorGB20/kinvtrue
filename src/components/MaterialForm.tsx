import { useState } from 'react';
import type { Material } from '../types';

interface MaterialFormProps {
    onSubmit: (material: Omit<Material, 'id'>) => void;
    onClose: () => void;
    initialData?: Material;
}

export const MaterialForm = ({ onSubmit, onClose, initialData }: MaterialFormProps) => {
    const [formData, setFormData] = useState<Omit<Material, 'id'>>({
        userId: initialData?.userId || '',
        nombre: initialData?.nombre || '',
        categoria: initialData?.categoria || 'Portatiles',
        stockDisponible: initialData?.stockDisponible || 0,
        stockReparacion: initialData?.stockReparacion || 0,
        stockBaja: initialData?.stockBaja || 0,
        ubicacion: initialData?.ubicacion || ''
    });

    const handleSubmit = (e: React.ChangeEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nombre del Equipo</label>
                <input
                    required
                    type="text"
                    className="input-field"
                    value={formData.nombre}
                    onChange={e => setFormData({ ...formData, nombre: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Categoría</label>
                <select
                    className="input-field"
                    value={formData.categoria}
                    onChange={e => setFormData({ ...formData, categoria: e.target.value })}
                >
                    <option value="Portatiles">Portátiles</option>
                    <option value="Perifericos">Periféricos</option>
                    <option value="Inmuebles">Inmuebles</option>
                    <option value="Impresion">Impresión</option>
                    <option value="Moviles">Móviles</option>
                    <option value="Redes">Redes</option>
                    <option value="Audiovisual">Audiovisual</option>
                </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div>
                    <label className="block text-xs font-medium text-green-700 mb-1">Disponibles</label>
                    <input
                        type="number"
                        min="0"
                        className="input-field border-green-200 focus:border-green-500 focus:ring-green-500"
                        value={formData.stockDisponible}
                        onChange={e => setFormData({ ...formData, stockDisponible: parseInt(e.target.value) || 0 })}
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-yellow-700 mb-1">Reparación</label>
                    <input
                        type="number"
                        min="0"
                        className="input-field border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                        value={formData.stockReparacion}
                        onChange={e => setFormData({ ...formData, stockReparacion: parseInt(e.target.value) || 0 })}
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-red-700 mb-1">Baja/Roto</label>
                    <input
                        type="number"
                        min="0"
                        className="input-field border-red-200 focus:border-red-500 focus:ring-red-500"
                        value={formData.stockBaja}
                        onChange={e => setFormData({ ...formData, stockBaja: parseInt(e.target.value) || 0 })}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Ubicación</label>
                <input
                    type="text"
                    placeholder="Ej: Planta 2, Rack A"
                    className="input-field"
                    value={formData.ubicacion}
                    onChange={e => setFormData({ ...formData, ubicacion: e.target.value })}
                />
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="btn-primary justify-center"
                >
                    Guardar Material
                </button>
            </div>
        </form>
    );
};