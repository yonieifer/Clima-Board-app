import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";

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
