import { createBrowserRouter } from "react-router-dom";
import OrganizationsPage from "../pages/Organizations/OrganizationsPage";
import ProjectsPage from "../pages/Projects/ProjectsPage";
import HomePage from "../pages/Home/HomePage";
import MainLayout from "../layouts/portal";

export const ROUTER_BROWSER = createBrowserRouter([
    
    
    {
        path: "/",
        element: <MainLayout />, 
        children: [
            { path : "/", element: <HomePage /> },
            { path : "/organizations", element: <OrganizationsPage /> },
            { path : "/projects", element: <ProjectsPage /> },
            { path : "/projects/organization/:organization", element: <ProjectsPage /> },
        ]
    }
]);

export const ROUTES_NAVIGATION = [
    { path : "/", label: "Home" },
    { path : "/organizations", label: "Organizations" },
];