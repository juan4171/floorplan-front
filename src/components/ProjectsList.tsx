import React, { useState } from 'react';
import { Project } from '../hooks/interfaces';
import BasicCard from './ProjectCard';
import { Button, List, ListItem } from '@mui/material';
import CreateProjectModal from './modal/CreateProjectModal';

interface Props {
    projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);

    const handleCreate = () => {
        setSelectedProject(undefined);
        setModalOpen(true);
    };

    const handleSave = (project: Project) => {
        if (selectedProject) {
            // Actualizar proyecto existente
            console.log('Updated:', project);
        } else {
            // Crear nuevo proyecto
            console.log('Created:', project);
        }
        setModalOpen(false);
    };

    return (
        <div>
            <h2>Projects</h2>
            <h3>Create a new project</h3>
            <Button size="small" onClick={handleCreate}>Crear nuevo proyecto</Button>
            
            <h3>Projects:</h3>
            <List>
                {projects.map(pro => (
                    <ListItem key={pro._id}>
                      <BasicCard project={pro}></BasicCard>
                    </ListItem>
                ))}
           </List>
           <CreateProjectModal
                open={modalOpen}
                setOpen={setModalOpen}
                onCreate={handleSave}
            />
        </div>
    );
};

export default ProjectList;