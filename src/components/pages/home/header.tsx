import { Box, Paper, Typography } from "@mui/material";
import classes from './classes'

const HomeHeader = () => {
    return (
        <Paper sx={classes.containerHeader}>
            <Typography sx={classes.title}>
                ¡Bienvenido a FloorPlan!
            </Typography>

            <Box sx={classes.boxInfoHeader}>
                <Typography sx={classes.description}>
                    FloorPlan es grande...
                </Typography>
            </Box>
        </Paper>
    );
};

export default HomeHeader