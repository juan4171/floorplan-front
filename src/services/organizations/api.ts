import axios from 'axios';
import { Organization } from "../interfaces";
import { API_URL_organizations } from '../../constants/env';

export const getOrganizations = async (): Promise<Organization[]> => {
    const response = await axios.get(API_URL_organizations);
    return response.data;
};

export const createOrganization = async (organization: Organization): Promise<Organization> => {
    console.log('Creating organization:', organization);
    const response = await axios.post(API_URL_organizations, organization);
    return response.data;
};

export const updateOrganization = async (id: string, organization: Organization): Promise<Organization> => {
    const response = await axios.patch(`${API_URL_organizations}${id}`, organization);
    return response.data;
};

export const deleteOrganization = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL_organizations}${id}`);
};