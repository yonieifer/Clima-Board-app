import type { CityDetailsType } from "../types/City";
import { useNavigate } from "react-router-dom";

function CityDetailsCard({ city }: { city: CityDetailsType }) {
    const navigate = useNavigate();
    const toForecast = (lat: number, long: number) =>
        navigate(`/app/${city.city}/${lat}/${long}`);
    return (
        <article key={city.latitude}>
            <h3>
                {city.city}, {city.country}
            </h3>
            <p>latitude: {city.latitude}</p>
            <p>longitude: {city.latitude}</p>
            <button onClick={() => toForecast(city.latitude, city.longitude)}>
                watch full forecast
            </button>
        </article>
    );
}

export default CityDetailsCard;
