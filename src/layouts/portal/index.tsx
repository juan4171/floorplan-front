/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { themeDark } from '@/styles/muiTheme'
import LayoutPortalHeader from "@/components/layouts/portal/header";
import LayoutPortalDrawer from "@/components/layouts/portal/drawer";
import classes from './classes'
import LayoutPortalFooter from "@/components/layouts/portal/footer";
import AuthProvider from "@/providers/auth";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    children?: ReactNode
}

const LayoutPortal = ({ children }: Props) => {
    const { logout } = useAuth0();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
   
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline />
            <AuthProvider>
                <Box sx={classes.root}>
                    <CssBaseline />

                    <LayoutPortalHeader
                        onClick={handleDrawerToggle}
                        onLogout={logout}
                    />

                    <LayoutPortalDrawer
                        open={mobileOpen}
                        onClose={handleDrawerClose}
                        onTransition={handleDrawerTransitionEnd}
                    />

                    <Box sx={classes.boxContainerChildren}>
                        <Box component="main" sx={classes.children}>
                            <Toolbar />
                            {children}
                        </Box>

                        <LayoutPortalFooter />
                    </Box>

                </Box>
            </AuthProvider>
        </MuiThemeProvider>
    );
};

export default LayoutPortal;