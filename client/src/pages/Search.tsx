import { useState } from "react";
import { useCityDetails } from "../hooks/useWeather";
import type { CityDetailsType } from "../types/City";
import CityCard from "../components/CityCard";
import { AxiosError } from "axios";

function Search() {
    const [search, setSearch] = useState("");
    const { getSearch, isLoading, error, data } =
        useCityDetails<CityDetailsType[]>();
    const onSearch = () => {
        getSearch(search);
    };

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
                    </article>
                ))}
        </>
    );
}

export default Search;
