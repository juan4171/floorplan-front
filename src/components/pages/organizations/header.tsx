/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button } from "@mui/material";
import classes from "./classes";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ModalOrganizacion from "./components/modal/organization";
import { Organization } from "./interface";

interface Props {
    disabled?: boolean;
    onAddOrganization: (organization: Organization) => void;
}

const ViewOrganizationHeader = ({ disabled, onAddOrganization }: Props) => {
    const [addTool, setAddTool] = useState(false);

    const handleAgregarOrganizacion = () => {
        setAddTool(true);
    };

    return (
        !disabled && (
            <Box sx={classes.containerHeader}>
                <Button
                    startIcon=<AddIcon />
                    variant="contained"
                    onClick={handleAgregarOrganizacion}
                >
                    Agregar Organizacion
                </Button>

                <ModalOrganizacion
                    open={addTool}
                    setOpen={setAddTool}
                    onAddOrganization={onAddOrganization}
                />
            </Box>
        )
    );
};

export default ViewOrganizationHeader;
