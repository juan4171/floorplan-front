import { Box } from "@mui/material";
import { ReactNode } from "react";
import classes from './classes'
import './styles.css'
import AuthProvider from "@/providers/auth";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '@/styles/muiTheme'

interface Props {
    children?: ReactNode
}

const LayoutAuth = ({ children }: Props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Box sx={classes.root}>

                    <Box sx={classes.boxChildren}>
                        {children}
                    </Box>

                    <Box sx={classes.bgImg} />
                </Box>
            </AuthProvider>
        </MuiThemeProvider>
    );
};

export default LayoutAuth; 