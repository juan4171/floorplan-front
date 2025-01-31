import { useEffect, useState } from "react";
import { Box, Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import classes from './classes'
import logo from '@/assets/images/logos/logo-snoop.png'
/* import { ROUTES_NAVIGATION } from "@/constants/routes"; */
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate, useLocation } from "react-router-dom";
import AssistantIcon from '@mui/icons-material/Assistant';

const LayoutPortalNav = () => {
    const [suggest, setSuggest] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const currentPath = pathname.split('/')[1]
    const currentPathTag = pathname.split('/')[2]

    const handleClickNavigate = (url: string) => () => {
        navigate(url)
    };

    const handleOpenSuggest = () => {
        setSuggest(true)
    }

    return (
        <Box sx={classes.tagsContainer}>
            <Toolbar sx={classes.boxImgTags}>
                <img src={logo} width={160} alt="Snoop Consulting" />
            </Toolbar>

            <Box sx={classes.boxNavigation}>
                <List sx={classes.listNavigation}>
                    {ROUTES_NAVIGATION.map((info, index) => (
                        !info.hidden &&
                        <Box key={index}>
                            <ListItemButton
                                onClick={
                                    info.label === 'Accesos'
                                        ? handleClickCollapseTools
                                        : info.label === 'Cursos'
                                            ? handleClickCollapseCourses
                                            : handleClickNavigate(info.path)
                                }
                                sx={currentPath === info.reference ? classes.navSelected : classes.nav}
                                dense
                            >
                                <ListItemIcon>
                                    {info.icon}
                                </ListItemIcon>
                                <ListItemText primary={info.label} />
                                {
                                    info.label === "Accesos" ?
                                        openCollapseTools ? <ExpandLess /> : <ExpandMore />
                                        : info.label === "Cursos" ?
                                            openCollapseCourses ? <ExpandLess /> : <ExpandMore />
                                            :
                                            null
                                }
                            </ListItemButton>

                            {
                                info.label === "Accesos" &&
                                <Collapse in={openCollapseTools} timeout="auto" unmountOnExit sx={classes.listSectionsTools}>
                                    <List component="div" disablePadding>
                                        {
                                            currentTags.map((tag, index) =>
                                                <ListItemButton
                                                    key={index}
                                                    sx={(currentPath === 'accesos' && decodeURIComponent(currentPathTag)?.toLowerCase() === tag.path.toLowerCase()) ? classes.itemButtomCollapseSelected : classes.itemButtomCollapse}
                                                    onClick={handleClickNavigate(`/accesos/${tag.path}`)}
                                                    dense
                                                >
                                                    <ListItemIcon>
                                                        <TagIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={tag.label} />
                                                </ListItemButton>
                                            )
                                        }
                                    </List>
                                </Collapse>
                            }

                            {
                                info.label === "Cursos" &&
                                <Collapse in={openCollapseCourses} timeout="auto" unmountOnExit sx={classes.listSectionsTools}>
                                    <List component="div" disablePadding>
                                        {
                                            currentCategories.map((category, index) =>
                                                <ListItemButton
                                                    key={index}
                                                    sx={(currentPath === 'cursos' && decodeURIComponent(currentPathTag)?.toLowerCase() === category.path.toLowerCase()) ? classes.itemButtomCollapseSelected : classes.itemButtomCollapse}
                                                    onClick={handleClickNavigate(`/cursos/${category.path}`)}
                                                    dense
                                                >
                                                    <ListItemIcon>
                                                        <TagIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={category.label} />
                                                </ListItemButton>
                                            )
                                        }
                                    </List>
                                </Collapse>
                            }


                        </Box>
                    ))}
                </List>

                <Button
                    variant="outlined"
                    startIcon={<AssistantIcon />}
                    onClick={handleOpenSuggest}
                    sx={classes.buttonSuggest}
                >
                    Hacer sugerencia
                </Button>
            </Box>

            <ModalSuggest
                open={suggest}
                setOpen={setSuggest}
            />
        </Box>
    );
};

export default LayoutPortalNav;