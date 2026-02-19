import type { Material, Usuario } from '../types';

export const initialMateriales: Material[] = [
    { id: 'm1', userId: 'u1', nombre: 'MacBook Pro M2', categoria: 'Portatiles', stockDisponible: 5, stockReparacion: 0, stockBaja: 0, ubicacion: 'Almacén Central' },
    { id: 'm2', userId: 'u1', nombre: 'Monitor Dell 27"', categoria: 'Perifericos', stockDisponible: 10, stockReparacion: 0, stockBaja: 0, ubicacion: 'Oficina 3' },
    { id: 'm3', userId: 'u1', nombre: 'Teclado Logitech MX Keys', categoria: 'Perifericos', stockDisponible: 15, stockReparacion: 1, stockBaja: 0, ubicacion: 'Almacén Central' },
    { id: 'm4', userId: 'u1', nombre: 'Ratón Logitech MX Master 3', categoria: 'Perifericos', stockDisponible: 12, stockReparacion: 0, stockBaja: 1, ubicacion: 'Oficina 2' },
    { id: 'm5', userId: 'u1', nombre: 'Docking Station USB-C', categoria: 'Perifericos', stockDisponible: 8, stockReparacion: 2, stockBaja: 0, ubicacion: 'Almacén Central' },
    { id: 'm6', userId: 'u1', nombre: 'Impresora HP LaserJet Pro', categoria: 'Impresion', stockDisponible: 2, stockReparacion: 1, stockBaja: 0, ubicacion: 'Sala de Copias' },
    { id: 'm7', userId: 'u1', nombre: 'Tóner HP 59A', categoria: 'Impresion', stockDisponible: 20, stockReparacion: 0, stockBaja: 3, ubicacion: 'Almacén Central' },
    { id: 'm8', userId: 'u1', nombre: 'iPhone 13', categoria: 'Moviles', stockDisponible: 6, stockReparacion: 0, stockBaja: 0, ubicacion: 'Departamento IT' },
    { id: 'm9', userId: 'u1', nombre: 'Router Cisco RV340', categoria: 'Redes', stockDisponible: 3, stockReparacion: 0, stockBaja: 0, ubicacion: 'CPD' },
    { id: 'm10', userId: 'u1', nombre: 'Switch TP-Link 24 Puertos', categoria: 'Redes', stockDisponible: 4, stockReparacion: 1, stockBaja: 0, ubicacion: 'CPD' },
    { id: 'm11', userId: 'u1', nombre: 'Silla Ergonómica', categoria: 'Inmuebles', stockDisponible: 7, stockReparacion: 2, stockBaja: 1, ubicacion: 'Oficina 1' },
    { id: 'm12', userId: 'u1', nombre: 'Proyector Epson Full HD', categoria: 'Audiovisual', stockDisponible: 2, stockReparacion: 0, stockBaja: 0, ubicacion: 'Sala de Reuniones' }

];

export const initialUsuarios: Usuario[] = [
    { id: 'u1', email: 'admin@ies-azarquiel.es', password: 'admin', nombre: 'Admin', rol: 'ADMIN' }
];