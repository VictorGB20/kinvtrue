import { useState } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { useNavigate, Link } from 'react-router-dom';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = useAppStore(state => state.login);
    const usuarios = useAppStore(state => state.usuarios);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const foundUser = usuarios.find(u => u.email === email && u.password === password);

        if (foundUser) {
            login(foundUser);
            navigate('/');
        } else {
            setError('Credenciales incorrectas. Prueba con admin@ies-azarquiel.es / admin');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Gestión de Materiales
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
                            {error}
                        </p>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        Iniciar Sesión
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            ¿No tienes cuenta?{' '}
                            <Link to="/register" className="text-green-600 hover:text-green-700 font-medium">
                                Registrarse
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
};