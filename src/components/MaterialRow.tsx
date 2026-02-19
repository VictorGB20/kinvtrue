import type { Material } from '../types';

interface MaterialRowProps {
    material: Material;
    onDelete: (id: string) => void;
    onEdit: (material: Material) => void;
}

export const MaterialRow = ({ material, onDelete, onEdit }: MaterialRowProps) => {
    const totalStock = material.stockDisponible + material.stockReparacion + material.stockBaja;

    return (
        <tr className="hover:bg-gray-50 transition-colors border-b">
            <td className="px-6 py-4 font-medium text-gray-900">{material.nombre}</td>
            <td className="px-6 py-4 text-gray-600">{material.categoria}</td>
            <td className="px-6 py-4 text-center">
                <span className={`font-bold flex items-center justify-center gap-1 ${totalStock < 3 ? 'text-red-500' : ''}`}>
                    {totalStock}
                    {totalStock < 3 && (
                        <svg className="w-4 h-4 text-red-500 fill-current"><use href="/sprites.svg#icon-alert" /></svg>
                    )}
                </span>
            </td>
            <td className="px-6 py-4">
                <div className="flex gap-2">
                    {material.stockDisponible > 0 && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800" title="Disponible">
                            OK: {material.stockDisponible}
                        </span>
                    )}
                    {material.stockReparacion > 0 && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800" title="En Reparación">
                            REP: {material.stockReparacion}
                        </span>
                    )}
                    {material.stockBaja > 0 && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800" title="Baja / Roto">
                            BAJ: {material.stockBaja}
                        </span>
                    )}
                    {totalStock === 0 && (
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                            Agotado
                        </span>
                    )}
                </div>
            </td>
            <td className="px-6 py-4 text-gray-500 text-sm">{material.ubicacion}</td>
            <td className="px-6 py-4 text-right space-x-2">
                <button
                    onClick={() => onEdit(material)}
                    className="text-blue-600 hover:text-blue-900"
                >
                    <svg className="w-5 h-5 stroke-current fill-none"><use href="/sprites.svg#icon-edit" /></svg>
                </button>
                <button
                    onClick={() => onDelete(material.id)}
                    className="text-red-600 hover:text-red-900"
                >
                    <svg className="w-5 h-5 stroke-current fill-none"><use href="/sprites.svg#icon-trash" /></svg>
                </button>
            </td>
        </tr>
    );
};