import React, { useContext, useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserInfoContext } from "../../Providers/UserInfoContext";


export const ProtectedRoutes = () => {

    const { info } = useContext(UserInfoContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            {info ? <Outlet /> : <Navigate to={'/'} />}
        </>
    )
}