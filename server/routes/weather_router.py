from fastapi import APIRouter
from services.api_service import (
    get_current_weather,
    get_weather_forecast,
    compare_cities_weather,
    get_city_details
)
from schemas.models import Lat, Long, CityQuery, CityPath

router = APIRouter(prefix="/weather", tags=["weather"])

@router.get("details/{city}")
def find_city(city: CityPath):
    details = get_city_details(city)
    return {"result": details}


@router.get("/current")
def current_weather(lat: Lat, long: Long):
    weather = get_current_weather(lat, long)
    return {"result": weather}


@router.get("/forecast")
def weather_forecast(lat: Lat, long: Long):
    forecast = get_weather_forecast(lat, long)
    return {"result": forecast}


@router.get("/compare")
def compare_cities(city1: CityQuery, city2: CityQuery):
    results = compare_cities_weather(city1, city2)
    return {"result": results}
