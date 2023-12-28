import { isValidToken } from "../utils/utils";
import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

function ProtectedRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const location = useLocation()

    useEffect(() => {
        async function isUserLoggedIn() {
            try {
                setIsLoggedIn((await isValidToken()).isValidToken);
                setIsLoading(false)
            } catch (err) {
                console.error(err);
                setIsLoading(false)
            }
        }
        isUserLoggedIn();
    }, [location.pathname]);

    if (!isLoading) {
        return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
    }
}

export default ProtectedRoutes;
