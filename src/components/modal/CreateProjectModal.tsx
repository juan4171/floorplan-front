import React from 'react';
import BaseProjectModal from './BaseProjectModal';
import { Project } from '../../hooks/interfaces';
import { createProject } from '../../services/projects/api';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    onCreate: (project: Project) => void;
    organization: string;
}

const CreateProjectModal: React.FC<Props> = ({ open, setOpen, onCreate, organization }) => {
    const handleCreate = async (project: Project) => {
        project.organization = organization;
        const newProject = await createProject(project);
        onCreate(newProject);
    };

    return (
        <BaseProjectModal
            open={open}
            setOpen={setOpen}
            onSave={handleCreate}
            title="Create Project"
        />
    );
};

export default CreateProjectModal;