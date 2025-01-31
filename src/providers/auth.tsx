/* eslint-disable react-hooks/exhaustive-deps */
import LoaderFullPage from "@/components/common/loaders/fullPage";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    children?: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    const { isAuthenticated, isLoading, user } = useAuth0();
    const currentPath = window.location.pathname
    const navigate = useNavigate()

    useEffect(() => {
        console.log('AuthProvider', isAuthenticated, isLoading, user)
        if (!isAuthenticated && !isLoading && currentPath !== '/login') {
            navigate('/login')
        }

        if (isAuthenticated && !isLoading && currentPath === '/login') {
            navigate('/')
        }
    }, [isLoading, currentPath])

    return (
        <>
            {
                (isAuthenticated || (currentPath === '/login' && !isLoading)) ?
                    <>{children}</>
                    :
                    <LoaderFullPage open />
                    /* <>{children}</> */
            }
        </>
    );
};

export default AuthProvider;