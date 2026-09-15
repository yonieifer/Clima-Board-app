import FavoritesList from "../components/FavoritesList";

function FavoritesPage() {
    const name = localStorage.getItem("name");

    return (
        <>
            <h1>Favorites</h1>
            {name && <FavoritesList name={name} />}
        </>
    );
}

export default FavoritesPage;
