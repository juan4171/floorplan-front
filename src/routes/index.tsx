import { ROUTER_BROWSER } from "@/constants/routes";
import { RouterProvider } from "react-router-dom";

const Routes = () => {
    return (
        <RouterProvider router={ROUTER_BROWSER} />
    );
};

export default Routes;