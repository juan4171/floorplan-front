import axios from 'axios';
import { Project } from "../interfaces";
import { API_URL_projects } from '../../constants/env';

export const getProjects = async (): Promise<Project[]> => {
    const response = await axios.get(API_URL_projects);
    return response.data;
};

export const createProject = async (project: Project): Promise<Project> => {
    const response = await axios.post(API_URL_projects, project);
    return response.data;
};

export const updateProject = async (id: string, project: Project): Promise<Project> => {
    console.log(" actualizando projecto ", project);
    const response = await axios.patch(`${API_URL_projects}${id}`, project);
    return response.data;
};

export const deleteProject = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL_projects}${id}`);
}

export const getProject = async (id: string): Promise<Project> => {
    const response = await axios.get(`${API_URL_projects}${id}`);
    return response.data;
}

export const getProjectsByOrganization = async (organizationId: string): Promise<Project[]> => {
    const response = await axios.get(`${API_URL_projects}organization/${organizationId}`);
    return response.data;
}

