import { useAppStore } from '../stores/useAppStore';
import { Inventario } from './InventarioView';

export const Dashboard = () => {
    const usuario = useAppStore(state => state.usuario);
    const allMateriales = useAppStore(state => state.materiales);
    const setActiveFilter = useAppStore(state => state.setActiveFilter);

    // Filter materials by current user
    const materiales = allMateriales.filter(m => m.userId === usuario?.id);

    // Cálculos rápidos para el dashboard
    const totalEquipos = materiales.reduce((acc, item) => acc + item.stockDisponible + item.stockReparacion + item.stockBaja, 0);
    const enReparacion = materiales.reduce((acc, item) => acc + item.stockReparacion, 0);
    const bajoStock = materiales.filter(m => m.stockDisponible < 3).length;

    const handleCardClick = (filter: 'TODOS' | 'REPARACION' | 'BAJA') => {
        setActiveFilter(filter);
    };

    const downloadCSV = () => {
        const headers = ['ID', 'Nombre', 'Categoria', 'Stock Disponible', 'Stock Reparacion', 'Stock Baja', 'Ubicacion'];
        const rows = materiales.map(m => [
            m.id,
            `"${m.nombre}"`, // Escape quotes
            m.categoria,
            m.stockDisponible,
            m.stockReparacion,
            m.stockBaja,
            `"${m.ubicacion}"`
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(r => r.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'inventario_materiales.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Gestor de Inventario</h1>
                <p className="text-slate-500">Estado actual de los recursos de la empresa.</p>
            </div>

            {/* Grid de Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    onClick={() => handleCardClick('TODOS')}
                    className="card-white border-l-4 border-blue-600 cursor-pointer hover:shadow-md transition-all group"
                >
                    <h3 className="text-sm font-medium text-slate-500 uppercase group-hover:text-blue-600">Total Unidades</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{totalEquipos}</p>
                </div>

                <div
                    onClick={() => handleCardClick('REPARACION')}
                    className="card-white border-l-4 border-yellow-500 cursor-pointer hover:shadow-md transition-all group"
                >
                    <h3 className="text-sm font-medium text-slate-500 uppercase group-hover:text-yellow-600">En Mantenimiento</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{enReparacion}</p>
                </div>

                <div
                    onClick={() => handleCardClick('BAJA')}
                    className="card-white border-l-4 border-red-500 cursor-pointer hover:shadow-md transition-all group"
                >
                    <h3 className="text-sm font-medium text-slate-500 uppercase group-hover:text-red-600">Críticos (Bajo Stock)</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{bajoStock}</p>
                </div>
            </div>
            <Inventario />

            {/* Sección Visual Extra (Creatividad) */}
            <div className="bg-blue-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">¿Quieres guardar tu progreso?</h2>
                    <p className="text-blue-100 mb-4 max-w-md">
                        Descarga tu lista de materiales en CSV pulsando aqui!
                    </p>
                    <button
                        onClick={downloadCSV}
                        className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        Descargar CSV
                    </button>
                </div>
                {/* Círculo decorativo azul claro para dar toque de diseño */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-700 rounded-full opacity-50"></div>
            </div>
        </div>
    );
};