import { Link, Outlet } from "react-router-dom";
import { useCurrentWeather } from "../hooks/useWeather";
import CityCard from "../components/CityCard";
import type { CurrentCityWeather } from "../types/City";

function Dashboard() {
    const [isLoading, error, data] = useCurrentWeather<CurrentCityWeather>(
        32,
        34,
    );
    const name = localStorage.getItem("name");
    return (
        <>
            <h1>Hello, {name}!</h1>
            <nav>
                {/* <Link to="/app/search">Search</Link>
                <Link to="/app/favorites">Favorites</Link>
                <Link to="/app/compare">Compare</Link> */}
            </nav>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>Error</h3>}
            {console.log(data)
            }
            {data && <CityCard city={data} name="Tel Aviv" />}
            <Outlet/>
        </>
    );
}

export default Dashboard;
