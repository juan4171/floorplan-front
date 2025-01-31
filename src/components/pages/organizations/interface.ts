interface User {
	name: string;
	email: string;
	isAdmin: boolean;
}

export interface Organization {
	_id: string;
	name: string;
	direccion: string;
	contacto: string;
	users: User[];
	createdAt: string;
	updatedAt: string;
}

export interface Project {
	_id: string;
	organization: string;
	name: string;
	campos_dinamicos?: Record<string, any>; // Campos dinámicos opcionales
	createdAt: string;
	updatedAt: string;
}

