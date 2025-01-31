/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Card,
    CardActions,
    CardContent,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import classes from "./classes";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Organization } from "../interface";
import { deleteOrganization } from "@/services/organizations/api";
import ModalOrganizacion from "./modal/organization";

interface Props {
    organization: Organization;
    onDelete: (id: string) => void;
}

const OrganizationCard = ({ organization, onDelete }: Props) => {
    const [edit, setEdit] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { name, contacto, direccion } = organization;

    const handleDelete = async () => {
        try {
            await deleteOrganization(organization._id);
            onDelete(organization._id);
        } catch (error) {
            console.error("Error deleting organization:", error);
        }
    };

    const handleEdit = () => {
        setEdit(true);
        setAnchorEl(null);
    };

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={classes.boxOutCard}>
            <Card sx={classes.card}>
                <Box sx={classes.containerHeaderCard}>
                    <Box sx={classes.boxHeaderCard}>
                        <Typography sx={classes.textHeaderCard}>
                            {name}
                        </Typography>
                    </Box>

                    <CardContent>
                        <Typography sx={classes.descriptionCard}>
                            {direccion}
                        </Typography>
                        <Typography sx={classes.descriptionCard}>
                            {contacto}
                        </Typography>
                    </CardContent>
                </Box>

                <IconButton
                    size="small"
                    onClick={handleOpenMenu}
                    sx={classes.buttonFavorites}
                >
                    <MoreVertIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={handleEdit}>
                        <ListItemIcon>
                            <ModeIcon fontSize="small" color="primary" />
                        </ListItemIcon>

                        <ListItemText>{"Editar organizacion"}</ListItemText>
                    </MenuItem>

                    <MenuItem onClick={handleDelete}>
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" color="primary" />
                        </ListItemIcon>

                        <ListItemText>{"Eliminar organizacion"}</ListItemText>
                    </MenuItem>
                </Menu>

                <CardActions sx={classes.actionsCard}></CardActions>
            </Card>

            <ModalOrganizacion
                open={edit}
                setOpen={setEdit}
                organization={organization} 
                onAddOrganization={() => {}}
                />
        </Box>
    );
};

export default OrganizationCard;
