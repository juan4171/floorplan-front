import { Box, Drawer } from "@mui/material";
import LayoutPortalNav from "@/components/layouts/portal/nav";
import classes from './classes'

interface Props {
    open: boolean
    onTransition: () => void
    onClose: () => void
}

const LayoutPortalDrawer = ({ open, onTransition, onClose }: Props) => {
    return (
        <Box sx={classes.drawerContainer}>
            <Drawer
                variant="temporary"
                open={open}
                onTransitionEnd={onTransition}
                onClose={onClose}
                ModalProps={{ keepMounted: true }}
                sx={classes.temporaryDrawer}
            >
                {<LayoutPortalNav />}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={classes.permanentDrawer}
                open
            >
                {<LayoutPortalNav />}
            </Drawer>
        </Box>
    );
};

export default LayoutPortalDrawer;