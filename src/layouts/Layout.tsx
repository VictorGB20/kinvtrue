
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { useAppStore } from "../stores/useAppStore";
import { Navigate } from "react-router-dom";

export default function Layout() {
    const usuario = useAppStore(state => state.usuario);

    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            <Sidebar />

            <div className="flex-1 flex flex-col md:h-screen md:overflow-hidden">
                

                <main className="flex-1 overflow-auto p-6 md:p-8 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
