export interface Material {
    id: string;
    userId: string;
    nombre: string;
    categoria: string;
    stockDisponible: number;
    stockReparacion: number;
    stockBaja: number;
    ubicacion: string;
}

export interface Usuario {
    id: string;
    email: string;
    password?: string;
    nombre: string;
    rol: 'ADMIN' | 'USER';
}