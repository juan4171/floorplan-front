import { Box, Typography } from "@mui/material";
import classes from "./classes";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Organization } from "./interface";
import OrganizationCard from "./components/card";

interface Props {
    organizations: Array<Organization>;
    textEmpty: string;
    handleModification: (id: string) => void;
}

const ViewOrganizationContent = ({
    organizations,
    textEmpty,
    handleModification,
}: Props) => {
    return (
        <Box sx={classes.containerCard}>
            {organizations.length === 0 ? (
                <Box sx={classes.boxInfoDeprecated}>
                    <SentimentVeryDissatisfiedIcon
                        sx={classes.iconDeprecated}
                    />
                    <Typography sx={classes.textDeprecated}>
                        {textEmpty}
                    </Typography>
                </Box>
            ) : (
                <>
                    {organizations.map((info, index) => (
                        <OrganizationCard
                            key={index}
                            organization={info}
                            onDelete={handleModification}
                        />
                    ))}
                </>
            )}
        </Box>
    );
};

export default ViewOrganizationContent;
