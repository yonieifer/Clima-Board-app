import { useParams } from "react-router-dom";
import { useCurrentWeather, useWeatherForecast } from "../hooks/useWeather";
import FullCityList from "../components/FullCityList";
import type { DailyForecastType, CurrentCityWeather } from "../types/City";
import CityCard from "../components/CityCard";

function FullCityPage() {
    const { city, lat, long } = useParams();
    const { isLoading, error, data } = useWeatherForecast<DailyForecastType[]>(
        Number(lat),
        Number(long),
    );
    const {
        isLoading: currLoading,
        error: currError,
        data: currData,
    } = useCurrentWeather<CurrentCityWeather>(Number(lat), Number(long));
    return (
        <>
            <h2>{city}</h2>
            <h2>Current Weather</h2>
            {currLoading && <h3>Loading...</h3>}
            {currError && <h3>{currError.message}</h3>}
            {currData && <CityCard city={currData}/>}
            <h2>Forecast</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {data && <FullCityList forecast={data} />}
        </>
    );
}

export default FullCityPage;
