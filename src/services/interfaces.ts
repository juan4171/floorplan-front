interface User {
    name: string;
    email: string;
    _id: string;
}

interface Forma {
    letra: string;
    numero: number;
    año: number;
    partida: string;
    _id: string;
}

export interface Organization {
    _id: string;
    name: string;
    direccion: string;
    contacto: string;
    users: User[];
    forma: Forma;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Plano {
    nombre: string;
    escala: string;
}

export interface Project {
    _id: string;
    organization: string;
    name: string;
    campos_dinamicos?: Record<string, any>; // Campos dinámicos opcionales
    createdAt: string;
    updatedAt: string;
    __v: number;
}

