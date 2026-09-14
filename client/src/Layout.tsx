import { Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function Layout() {
    return (
        <>
            <header>
                <Dashboard />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
