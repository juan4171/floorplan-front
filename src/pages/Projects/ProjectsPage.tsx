import React from 'react';
import { useProjects } from '../../hooks/useProjects';
import ProjectList from '../../components/ProjectsList';
import { useParams } from 'react-router-dom';


const ProjectsPage: React.FC = () => {
    const { organization } = useParams<{ organization: string }>();
    let data, isLoading, errors;
    if (organization) {
        ({ data, isLoading, errors } = useProjects(organization));
    } else {
        ({ data, isLoading, errors } = useProjects(""));
    }
    
    if (isLoading) return <div>Loading...</div>;
    if (errors) return <div>oops, somthing went wrong</div>;

    return <ProjectList projects={data} />;
};

export default ProjectsPage;