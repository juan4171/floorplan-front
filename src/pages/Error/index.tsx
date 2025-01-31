import { Box, Button, Typography } from "@mui/material";
import classes from "./classes";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import LayoutError from "@/layouts/error";

const Error = () => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate("/");
    };

    return (
        <LayoutError>
            <Box sx={classes.container}>
                <Box sx={classes.boxMessage}>
                    <Typography sx={classes.textNot}>
                        404: No encontramos nada
                    </Typography>

                    <Typography sx={classes.textInfo}>
                        Buscamos lo mejor que se pudo, pero no encontramos la
                        página...
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    size="small"
                    onClick={handleGoToHome}
                >
                    Volver al incio
                </Button>
            </Box>
        </LayoutError>
    );
};

export default Error;
