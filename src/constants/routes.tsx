import { createBrowserRouter } from "react-router-dom";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import Organization from "@/pages/Organizations";

export const ROUTER_BROWSER = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/organizaciones",
        element: <Organization />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

export const ROUTES_NAVIGATION = [
    {
        label: "Inicio",
        path: "/",
        reference: "",
        icon: <HomeIcon />,
        hidden: false,
    },
    {
        label: "Organizaciones",
        path: "/Organizaciones",
        reference: "Organizaciones",
        icon: <MenuBookIcon />,
        hidden: false,
    },
];
