import { useGetFavorites } from "../hooks/useFavorites";
import type { CityDetailsType } from "../types/City";
import CityDetailsCard from "./CityDetailsCard";

function FavoritesList({ name }: { name: string }) {
    const { isLoading, error, data } = useGetFavorites<CityDetailsType[]>(name);

    return (
        <>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {data && data.map((city) => <CityDetailsCard city={city} />)}
        </>
    );
}

export default FavoritesList;
