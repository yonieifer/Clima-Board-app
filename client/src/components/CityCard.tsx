import type { CurrentCityWeather } from "../types/City";

function CityCard({ city, name }: { city: CurrentCityWeather; name: string }) {
    return (
        <article>
            <h2>{name}</h2>
            <h3>{city.temperature_2m}°C</h3>
            <p>weather code: {city.weather_code}</p>
            <p>apparent temperature: {city.apparent_temperature}</p>
            <p>wind speed: {city.wind_speed_10m}</p>
            <p>time: {city.time}</p>
        </article>
    );
}

export default CityCard;
