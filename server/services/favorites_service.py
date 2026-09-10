import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
FAVORITES_FILE = BASE_DIR / "data" / "favorites.json"


def load_favorites() -> list:
    if not FAVORITES_FILE.exists():
        return []
    with open(FAVORITES_FILE, "r", encoding="utf8") as file:
        data = json.load(file)
        return data


def save_favorites(favorites: list):
    with open(FAVORITES_FILE, "w", encoding="utf8") as file:
        json.dump(favorites, file, indent=4)


def add_favorite(name: str, city: str):
    favorites = load_favorites()
    user_exists = False

    for f in favorites:
        if f["name"] == name:
            user_exists = True
            if city not in f["cities"]:
                f["cities"].append(city)
                break

    if not user_exists:
        favorites.append({"name": name, "cities": [city]})

    save_favorites(favorites)


def delete_favorite(name: str, city: str):
    favorites = load_favorites()

    for f in favorites:
        if f["name"] == name:
            if city in f["cities"]:
                f["cities"].remove(city)
                break


def get_favorites(name: str):
    favorites = load_favorites()
    for f in favorites:
        if f["name"] == name:
            return f["favorites"]

    save_favorites(favorites)
