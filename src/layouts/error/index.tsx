import { Box } from "@mui/material";
import { ReactNode } from "react";
import classes from './classes'
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '@/styles/muiTheme'

interface Props {
    children?: ReactNode
}

const LayoutError = ({ children }: Props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <Box sx={classes.boxChildren}>
                    {children}
                </Box>
        </MuiThemeProvider>
    );
};

export default LayoutError; 