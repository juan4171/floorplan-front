import { Box, Typography } from "@mui/material";
import classes from './classes'

const LayoutPortalFooter = () => {

    return (
        <Box sx={classes.boxFooter}>
            <Typography sx={classes.textFooter}>
                © FloorPlan, ingeniería de aplicaciones web 2024
            </Typography>

        </Box>
    );
};

export default LayoutPortalFooter;