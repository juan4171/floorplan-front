import { Box, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import classes from './classes'
import logo from '@/assets/images/logos/logo-floorplan.png'
import { ROUTES_NAVIGATION } from "@/constants/routes";
import { useNavigate, useLocation } from "react-router-dom";

const LayoutPortalNav = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const currentPath = pathname.split('/')[1]

    const handleClickNavigate = (url: string) => () => {
        navigate(url)
    };

    return (
        <Box sx={classes.tagsContainer}>
            <Toolbar sx={classes.boxImgTags}>
                <img src={logo} width={160} alt="Floor Plan" />
            </Toolbar>

            <Box sx={classes.boxNavigation}>
                <List sx={classes.listNavigation}>
                    {ROUTES_NAVIGATION.map((info, index) => (
                        !info.hidden &&
                        <Box key={index}>
                            <ListItemButton
                                onClick={handleClickNavigate(info.path)}
                                sx={currentPath === info.reference ? classes.navSelected : classes.nav}
                                dense
                            >
                                <ListItemText primary={info.label} />
                            </ListItemButton>
                        </Box>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default LayoutPortalNav;