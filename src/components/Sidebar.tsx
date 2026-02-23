import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export const Sidebar = () => {
    const usuario = useAppStore(state => state.usuario);
    const logout = useAppStore(state => state.logout);
    const [isOpen, setIsOpen] = useState(false);

    if (!usuario) return null;

    return (
        <aside className="w-full md:w-64 bg-slate-900 md:min-h-screen flex flex-col text-white shadow-xl">
            {/* Logo / Nombre de la Empresa */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <h1 className="text-xl font-bold flex items-center gap-2">
                    <div className="w-8 h-8 rounded flex items-center justify-center"><img src={`${import.meta.env.BASE_URL}pinguizo.png`} alt="" /></div>
                    <span>Kinv<span className="text-blue-500">True</span></span>
                </h1>

                {/*Toggle hamburguesa para el sidebar*/}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                    <svg className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}><use href={`${import.meta.env.BASE_URL}sprites.svg#icon-chevron-up`} /></svg>
                </button>
            </div>

            {/* Navegación */}
            <nav className={`flex-1 p-4 space-y-2 mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>

                <NavLink
                    to="/"
                    className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white hover:bg-blue-500' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                >
                    <svg className="w-6 h-6 stroke-current fill-none"><use href={`${import.meta.env.BASE_URL}sprites.svg#icon-dashboard`} /></svg>
                    <span className="font-medium">Dashboard</span>
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                >
                    <svg className="w-6 h-6 stroke-current fill-none"><use href={`${import.meta.env.BASE_URL}sprites.svg#icon-profile-2`} /></svg>
                    <span className="font-medium">Profile</span>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        }`}
                >
                    <svg className="w-6 h-6 stroke-current fill-none"><use href={`${import.meta.env.BASE_URL}sprites.svg#icon-info-circle`} /></svg>
                    <span className="font-medium">About</span>
                </NavLink>


            </nav>

            <div className={`p-4 border-t border-slate-800 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <div className="flex items-center justify-center gap-3 px-2 mb-2">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                            {usuario.nombre.charAt(0)}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">{usuario.nombre}</p>
                            <p className="text-xs text-slate-500">Conected</p>
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="w-16 flex items-center justify-center gap-2 p-2 text-sm text-red-400 hover:bg-slate-800 rounded transition-colors"
                    >
                        <svg className="w-4 h-4 stroke-current fill-none"><use href={`${import.meta.env.BASE_URL}sprites.svg#icon-logout`} /></svg>
                    </button>
                </div>
            </div>
        </aside>
    );
};
