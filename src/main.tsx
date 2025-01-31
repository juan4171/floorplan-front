import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";

import { DOMAIN, CLIENT_ID } from './constants/env';
/* const domain = "dev-oordfx03ywv3rvyt.us.auth0.com"
const clientId = "0JyqxBppnBmgEpdpjsbygov2yUlCBZX5"; */

console.log(DOMAIN);
console.log(CLIENT_ID);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Auth0Provider
            domain={DOMAIN}
            clientId={CLIENT_ID}
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            <App />
        </Auth0Provider>
    </StrictMode>
);
