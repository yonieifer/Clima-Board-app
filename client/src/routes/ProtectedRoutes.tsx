import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const name = localStorage.getItem("name");
    if (!name) return <Navigate to="/" />;
    return <Outlet />;
}

export default ProtectedRoutes;
