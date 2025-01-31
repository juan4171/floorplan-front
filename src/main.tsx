import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { Auth0Provider } from "@auth0/auth0-react";

import { DOMAIN, CLIENT_ID } from './constants/env';
/* const domain = "dev-oordfx03ywv3rvyt.us.auth0.com"
const clientId = "0JyqxBppnBmgEpdpjsbygov2yUlCBZX5"; */

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain={DOMAIN}
            clientId={CLIENT_ID}
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            
                    <Routes />
                
        </Auth0Provider>
    </React.StrictMode>
);
