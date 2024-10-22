import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
    mainLayout: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    mainContent: {
        display: 'flex',
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    pageContent: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default useStyles;