import { useState } from "react";
import { useCityDetails } from "../hooks/useWeather";
import type { CityDetailsType } from "../types/City";
import { useNavigate } from "react-router-dom";

function Search() {
    const [search, setSearch] = useState("");
    const { getSearch, isLoading, error, data } =
        useCityDetails<CityDetailsType[]>();
    const navigate = useNavigate();
    const onSearch = () => {
        getSearch(search);
    };
    const toForecast = (name: string, lat: number, long: number) =>
        navigate(`/app/${name}/${lat}/${long}`);

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="enter city"
            />
            <button onClick={onSearch}>search🔎</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {data &&
                data.map((c) => (
                    <article key={c.latitude}>
                        <h3>
                            {c.city}, {c.country}
                        </h3>
                        <p>latitude: {c.latitude}</p>
                        <p>longitude: {c.latitude}</p>
                        <button
                            onClick={() =>
                                toForecast(search, c.latitude, c.longitude)
                            }
                        >
                            watch full forecast
                        </button>
                    </article>
                ))}
        </>
    );
}

export default Search;
