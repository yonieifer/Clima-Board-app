import { useCurrentWeather } from "../hooks/useWeather";
import type { CurrentCityWeather } from "../types/City";
import { Link } from "react-router-dom";

function Dashboard() {
    const {isLoading, error, data} = useCurrentWeather<CurrentCityWeather>(
        32,
        34,
    );
    const name = localStorage.getItem("name") || "Guest";
    return (
        <>
            <h1>Hello, {name}!</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {data && <p>Tel Aviv {data.temperature_2m}°C</p>}
            <nav>
                <Link to="/app/search">Search</Link>
                <Link to="/app/favorites">Favorites</Link>
                <Link to="/app/compare">Compare</Link>
            </nav>
        </>
    );
}

export default Dashboard;
