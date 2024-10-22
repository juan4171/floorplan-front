import React from 'react';
import BaseProjectModal from './BaseProjectModal';
import { Project } from '../../hooks/interfaces';
import { updateProject } from '../../services/projects/api';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    project: Project;
    onUpdate: (project: Project) => void;
}

const EditProjectModal: React.FC<Props> = ({ open, setOpen, project, onUpdate }) => {
    const handleUpdate = async (updatedProject: Project) => {
        await updateProject(project._id, updatedProject);
        onUpdate(updatedProject);
    };

    return (
        <BaseProjectModal
            open={open}
            setOpen={setOpen}
            project={project}
            onSave={handleUpdate}
            title="Edit Project"
        />
    );
};

export default EditProjectModal;