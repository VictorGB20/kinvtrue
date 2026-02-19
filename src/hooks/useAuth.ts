import { useState } from 'react';
import type { Usuario } from '../types';
import { initialUsuarios } from '../data/initialData';

export const useAuth = () => {
    const [user, setUser] = useState<Usuario | null>(null);

    const login = (email: string, pass: string): Usuario | null => {
        // Buscamos en nuestros datos al usuario
        const foundUser = initialUsuarios.find(u => u.email === email && u.password === pass);
        
        if (foundUser) {
            setUser(foundUser);
            return foundUser;
        }
        return null;
    };

    const logout = () => setUser(null);

    return { user, login, logout };
};