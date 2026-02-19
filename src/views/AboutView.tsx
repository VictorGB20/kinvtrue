export const About = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Acerca de KinvTrue</h2>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-4">
                <p className="text-lg text-slate-600">
                    <span className="font-bold text-blue-600">KinvTrue</span> es una solución integral para la gestión de inventario y 
                    reparaciones diseñada para optimizar el flujo de trabajo en talleres técnicos y almacenes. Este proyecto está basado en el 
                    uso del LocalStorage, por lo que los avances e implementaciones no serán accesibles por otros dispositivos.
                </p>

                <h3 className="text-xl font-bold text-slate-800 pt-4">Nuestra Misión</h3>
                <p className="text-slate-600">
                    Proporcionar una herramienta intuitiva y potente que permita a los usuarios llevar un control preciso de materiales, 
                    estados de reparación y disponibilidad de stock en tiempo real de forma <strong>local</strong>.
                </p>

                <h3 className="text-xl font-bold text-slate-800 pt-4">Características Principales</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Gestión de Inventario en tiempo real.</li>
                    <li>Seguimiento de estados de reparación.</li>
                    <li>Interfaz amigable y responsiva.</li>
                    <li>Administración de usuarios y perfiles.</li>
                    <li>Independencia entre dispositivos.</li>
                </ul>
                <h3 className="text-xl font-bold text-slate-800 pt-4">Método de Uso</h3>
                <p className="text-slate-600">
                    Para poder utilizar todas sus caracteristicas, se recomienda crear su propia cuenta de usuario. Después, en el apartado 
                    de <strong>Dashboard</strong> podrá añadir, eliminar o editar los materiales que le parezcan ocurrentes. Por defecto, 
                    vienen algunos materiales los cuales podrá borrar fácil o dejarlos (A gusto del consumidor).
                </p>
                <p className="text-slate-600">
                    Por cualquier problema o mejora, no dude en contactarnos al siguiente correo: <a href="mailto:disfu.noreply@gmail.com" className="text-blue-600 hover:text-blue-700">disfu.noreply@gmail.com</a>
                </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-800 text-center">
                    Versión 1.0.0 &copy; 2026 KinvTrue Inc. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};
