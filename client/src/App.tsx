import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/app" element={<Layout />}>
                            <Route path="/app/search" element={<Search />} />
                            <Route path="/app/favorites" element />
                            <Route path="/app/compare" element />
                            <Route path="*" element={<NotFound/>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
