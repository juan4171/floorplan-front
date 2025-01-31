import axios from 'axios';
import { API_URL_organizations } from '../../constants/env';
import { Organization } from '../interfaces';

export const getOrganizations = async (): Promise<Organization[]> => {
    const response = await axios.get(API_URL_organizations);
    console.log('Organizations:', response.data);
    return response.data;
};

export const createOrganization = async (organization: Organization): Promise<Organization> => {
    console.log('Creating organization:', organization);
    const response = await axios.post(API_URL_organizations, organization);
    return response.data;
};

export const updateOrganization = async (id: string, organization: Organization): Promise<Organization> => {
    const response = await axios.patch(`${API_URL_organizations}${id}`, organization);
    console.log('Updating organization:', response.data);
    return response.data;
};

export const deleteOrganization = async (id: string): Promise<void> => {
    console.log('Deleting organization id:', id);
    await axios.delete(`${API_URL_organizations}${id}`);
};