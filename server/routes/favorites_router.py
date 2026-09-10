from fastapi import APIRouter
from services.favorites_service import add_favorite, delete_favorite, get_favorites
from schemas.models import CityQuery, NameQuery, NamePath

router = APIRouter(prefix="/favorites", tags=["favorites"])


@router.get("/{name}")
def get(name: NamePath):
    favorites = get_favorites(name)
    return {"result": favorites}


@router.post("", status_code=201)
def add(name: NameQuery, city: CityQuery):
    add_favorite(name, city)
    return {"message": "added to favorites"}


@router.delete("")
def delete(name: NameQuery, city: CityQuery):
    delete_favorite(name, city)
    return {"message": "deleted from favorites"}
