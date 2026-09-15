import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Welcome from "./pages/Welcome";
import Search from "./pages/Search";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import NotFound from "./pages/NotFound";
import FullCityPage from "./pages/FullCityPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/app" element={<Layout />}>
                            <Route path="/app/search" element={<Search />} />
                            <Route
                                path="/app/favorites"
                                element={<FavoritesPage />}
                            />
                            <Route path="/app/compare" element />
                            <Route
                                path="/app/:city/:lat/:long"
                                element={<FullCityPage />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
