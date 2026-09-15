from fastapi import APIRouter, HTTPException
from services.favorites_service import add_favorite, delete_favorite, get_favorites
from schemas.models import CityQuery, NameQuery, NamePath
from services.api_service import get_city_details

router = APIRouter(prefix="/favorites", tags=["favorites"])


@router.get("/{name}")
def get(name: NamePath):
    favorites = get_favorites(name)
    if not favorites:
        raise HTTPException(404, "no favorites found")

    favorites_details = [get_city_details(f)[0] for f in favorites]
    return favorites_details


@router.post("", status_code=201)
def add(name: NameQuery, city: CityQuery):
    is_added = add_favorite(name, city)
    if not is_added:
        raise HTTPException(400, f"{city} already in your favorite")
    return "added to favorites"


@router.delete("")
def delete(name: NameQuery, city: CityQuery):
    is_deleted = delete_favorite(name, city)
    if not is_deleted:
        raise HTTPException(400, f"{city} not in your favotites")
    return "deleted from favorites"
