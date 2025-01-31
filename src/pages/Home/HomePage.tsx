import React from 'react';
/* estoy en C:\Users\juan8\Desktop\Programing\floorplan\front-floorplan\src\pages\Home\HomePage.tsx */
/* LoginButton en C:\Users\juan8\Desktop\Programing\floorplan\front-floorplan\src\components\auth\Login.js */
import { LoginButton } from  '../../components/auth/Login';
import Profile from '../../components/auth/Profile';
import LogoutButton from '../../components/auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage: React.FC = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <h1>Pagina principal</h1>
            <p>Bienvenido a Floorplan</p>

            {isAuthenticated ? (
                <div>
                    <Profile />
                    <LogoutButton/>
                </div>
            ) : (
                <LoginButton />
            )}
        </>
    );
};

export default HomePage;