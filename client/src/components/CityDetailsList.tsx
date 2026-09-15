import type { DailyForecastType } from "../types/City";

function CityDetailsList({ forecast }: { forecast: DailyForecastType[] }) {
    return (
        <>
            {forecast.map((d) => (
                <article key={d.time}>
                    <h3>Day: {d.time}</h3>
                    <p>Avg Temperature: {d.temperature_2m_mean}°C</p>
                    <p>Apparent Temperature: {d.apparent_temperature_mean}</p>
                    <p>weather code: {d.weather_code}</p>
                    <p>Wind Speed:{d.wind_speed_10m_max}</p>
                </article>
            ))}
        </>
    );
}

export default CityDetailsList;
