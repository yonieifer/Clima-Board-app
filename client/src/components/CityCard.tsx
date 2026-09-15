import type { CurrentCityWeather } from "../types/City";

function CityCard({ city }: { city: CurrentCityWeather }) {
    return (
        <article>
            <h3>{city.temperature_2m}°C</h3>
            <p>apparent temperature: {city.apparent_temperature}°C</p>
            <p>weather code: {city.weather_code}</p>
            <p>wind speed: {city.wind_speed_10m}</p>
            <p>time: {city.time}</p>
        </article>
    );
}

export default CityCard;
