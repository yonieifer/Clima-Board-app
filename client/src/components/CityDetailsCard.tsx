import {
    useAddFavorite,
    useDeleteFavorite,
} from "../hooks/useFavorites";
import type { CityDetailsType } from "../types/City";
import { useNavigate } from "react-router-dom";

const name = localStorage.getItem("name")!;

function CityDetailsCard({ city, favorites, fetchData }: { city: CityDetailsType, favorites: CityDetailsType[], fetchData: () => void }) {
    const navigate = useNavigate();
    const { add } = useAddFavorite();
    const { remove } = useDeleteFavorite();
    const toForecast = (lat: number, long: number) =>
        navigate(`/app/${city.city}/${lat}/${long}`);
        const isFavorite = favorites.some((f) => f.city === city.city);

    return (
        <article key={city.latitude}>
            <h3>
                {city.city}, {city.country}
            </h3>
            <p>latitude: {city.latitude}</p>
            <p>longitude: {city.longitude}</p>
            <button onClick={() => toForecast(city.latitude, city.longitude)}>
                watch full forecast
            </button>
            <button
                onClick={() => {
                    isFavorite ? remove(name, city.city) : add(name, city.city);
                    fetchData()
                }}
            >
                {isFavorite ? "❤️" : "🤍"}
            </button>
        </article>
    );
}

export default CityDetailsCard;
