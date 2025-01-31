import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../../components/Drawer";
import useStyles from "./classes";

const MainLayout: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContent}>
            <Drawer />
            <div className={classes.pageContent}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
