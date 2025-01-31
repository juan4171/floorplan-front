import { useEffect, useState } from "react";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useOrganizations } from "@/hooks/useOrganizations";
import ViewOrganizationHeader from "./header";
import ViewOrganizationContent from "./content";
import { Organization } from "./interface";

interface Props {
    textEmptyContent: string;
}

const ViewOrganization = ({ textEmptyContent }: Props) => {
    const { data: organizations, isLoading, errors } = useOrganizations();
    const [orgs, setOrgs] = useState<Organization[]>([]);

    useEffect(() => {
        setOrgs(organizations);
    }, [organizations]);

    const handleAddOrganization = (organization: Organization) => {
        setOrgs((prevOrgs) => [...prevOrgs, organization]);
    };

    const handleDelete = (id: string) => {
        setOrgs((prevOrgs) => prevOrgs.filter((org) => org._id !== id));
    };

    if (isLoading) {
        return <CircularProgress />;
    }

    if (errors) {
        return (
            <Typography color="error">
                Error al cargar las organizaciones.
            </Typography>
        );
    }

    return (
        <Box>
            <ViewOrganizationHeader onAddOrganization={handleAddOrganization} />
            <Divider />
            <ViewOrganizationContent
                organizations={orgs}
                handleModification={handleDelete}
                textEmpty={textEmptyContent}
            />
        </Box>
    );
};

export default ViewOrganization;
