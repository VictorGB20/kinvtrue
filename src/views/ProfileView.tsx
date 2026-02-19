

import { useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export const Profile = () => {
    const usuario = useAppStore(state => state.usuario);
    const updateUser = useAppStore(state => state.updateUser);
    const updatePassword = useAppStore(state => state.updatePassword);

    // Local state for form fields
    const [nombre, setNombre] = useState(usuario?.nombre || "");
    const [email, setEmail] = useState(usuario?.email || "");

    // Password change state
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!nombre.trim() || !email.trim()) {
            alert("Todos los campos son obligatorios");
            return;
        }

        updateUser({ nombre, email });
        alert("Perfil actualizado correctamente");
    };

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            alert("Todos los campos de contraseña son obligatorios");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert("Las nuevas contraseñas no coinciden");
            return;
        }

        if (currentPassword == confirmNewPassword) {
            alert("La contraseña no puede ser la misma");
            return;
        }

        if (newPassword.length < 4) {
            alert("La nueva contraseña debe tener al menos 4 caracteres");
            return;
        }

        const success = updatePassword(currentPassword, newPassword);

        if (!success) {
            alert("La contraseña actual es incorrecta");
            return;
        }

        alert("Contraseña actualizada correctamente");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };

    if (!usuario) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Mi Perfil</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Panel lateral con foto y resumen */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center space-y-4 h-fit">
                    <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-slate-500">
                        {usuario.nombre.charAt(0)}
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-800">{usuario.nombre}</h3>
                        <p className="text-slate-500">{usuario.email}</p>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center py-2">
                            <span className="text-slate-500">Rol</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                                {usuario.rol}
                            </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                            <span className="text-slate-500">ID</span>
                            <span className="text-xs font-mono bg-slate-100 p-1 rounded">
                                {usuario.id.substring(0, 8)}...
                            </span>
                        </div>
                    </div>
                </div>

                {/* Formulario de edición */}
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">
                        Editar Información Personal
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all flex items-center gap-2"
                            >
                                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Guardar Cambios
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Password Change Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">
                    Cambiar Contraseña
                </h3>

                <form onSubmit={handlePasswordChange} className="space-y-4 max-w-2xl">
                    <div className="space-y-2">
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700">
                            Contraseña Actual
                        </label>
                        <input
                            type="password"
                            id="currentPassword"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Contraseña actual"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700">
                            Nueva Contraseña
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Nueva contraseña"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-slate-700">
                            Confirmar Nueva Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmNewPassword"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Confirmar nueva contraseña"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 transition-all flex items-center gap-2"
                        >
                            <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Cambiar Contraseña
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
