import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Organization } from '../services/interfaces';
import { deleteOrganization, updateOrganization } from '../services/organizations/api';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
    organization: Organization;
}

export default function BasicCard({organization}: Props) {
    
    const [editMode, setEditMode] = useState(false);
    const [newOrganization, setNewOrganization] = useState<Organization>(organization);
    const navigate = useNavigate()
    
    const handleDelete = async (id: string) => {
        await deleteOrganization(id);
        // Refetch data
        window.location.reload();
    };
    const handleEdit = async (id: string) => {
        await updateOrganization(id, newOrganization);
        // Refetch data
        window.location.reload();
    }
    const projectsRedirect = async (id: string) => {
        /* navegar a  */
        navigate(`/projects/organization/${id}`)
    }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      {editMode ? (
            <>
                <TextField
                    label="Name"
                    value={newOrganization.name}
                    onChange={(e) => setNewOrganization({ ...newOrganization, name: e.target.value })}
                />
                <TextField
                    label="Direccion"
                    value={newOrganization.direccion}
                    onChange={(e) => setNewOrganization({ ...newOrganization, direccion: e.target.value })}
                />
            </>
        ) : (
            <>
                <Typography variant="h5" component="div">
                    {organization.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {organization.direccion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {organization.contacto}
                </Typography>
            </>
        )}
      </CardContent>
      <CardActions>
        {editMode ? (
                <>
                    <Button size="small" onClick={() => handleEdit(organization._id)}>Save</Button>
                    <Button size="small" onClick={() => setEditMode(false)}>Cancel</Button>
                </>
            ) : (
                <>
                    <Button size="small" onClick={() => setEditMode(true)}>Edit</Button>
                    <Button size="small" onClick={() => handleDelete(organization._id)}>Delete</Button>
                    <Button size="small" onClick={() => projectsRedirect(organization._id)}>Projects</Button>
                </>
            )}
      </CardActions>
    </Card>
  );
}