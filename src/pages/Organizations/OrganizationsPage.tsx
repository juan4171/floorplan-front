import React from 'react';
import { useOrganizations } from '../../hooks/useOrganizations';
import OrganizationList from '../../components/OrganizationsList';


const OrganizationListPage: React.FC = () => {
    const { data, isLoading, errors } = useOrganizations();

    if (isLoading) return <div>Loading...</div>;
    if (errors) return <div>oops, somthing went wrong</div>;

    return <OrganizationList organizations={data} />;
};

export default OrganizationListPage;