/* eslint-disable react-hooks/exhaustive-deps */
import LayoutPortal from "@/layouts/portal";
import HomeHeader from "@/components/pages/home/header";
import { Grid, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <LayoutPortal>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <HomeHeader />
                </Grid>
                <Grid item xs={12}>
                    {!isAuthenticated ? (
                        <Button variant="contained" onClick={() => loginWithRedirect()}>
                            Login
                        </Button>
                    ) : (
                        <div>
                            <p>Welcome, {user?.name}</p>
                            <Button variant="contained" onClick={() => logout()}>
                                Logout
                            </Button>
                        </div>
                    )}
                </Grid>
            </Grid>
        </LayoutPortal>
    );
};

export default Home;