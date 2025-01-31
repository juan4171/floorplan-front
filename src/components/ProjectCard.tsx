import { useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { Project } from '../services/interfaces';
import { deleteProject } from '../services/projects/api';
import EditProjectModal from './modal/EditProjectModal';

interface Props {
    project: Project;
}

export default function BasicCard({ project }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);

    const handleDelete = async (id: string) => {
        await deleteProject(id);
        window.location.reload();
    };

    const handleEdit = () => {
        console.log('to Update:', project);
        setSelectedProject(project);
        setModalOpen(true);
    };

    function handleUpdate(): void {
        setModalOpen(false);
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <>
                    <Typography variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Id: {project._id}
                    </Typography>
                </>
            </CardContent>
            <CardActions>
                <>
                    <Button size="small" onClick={handleEdit}>Edit</Button>
                    <Button size="small" onClick={() => handleDelete(project._id)}>Delete</Button>
                </>
            </CardActions>
            <EditProjectModal
                open={modalOpen}
                setOpen={setModalOpen}
                project={selectedProject || project}
                onUpdate={handleUpdate}
            />
        </Card>
    );
}