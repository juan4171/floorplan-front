/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LayoutAuth from "@/layouts/auth";
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import classes from './classes'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    
    const { loginWithRedirect } = useAuth0();

    return (
        <LayoutAuth>
            <Box sx={classes.root}>
                <Card sx={classes.cardContainer}>
                    <CardContent>
                        <Typography sx={classes.title}>
                            ¡Bienvenido a FloorPlan!
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => loginWithRedirect()}
                        >
                            Iniciar sesión
                        </Button>
                    </CardActions>
                </Card>
            </Box>

        </LayoutAuth>
    );
};

export default Login;