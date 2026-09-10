from fastapi import FastAPI
from services.api_service import get_city_details, get_current_weather, get_weather_forecast, compare_cities_weather
from schemas.models import Lat, Long, CityPath, CityQuery

app = FastAPI()


@app.get("/health")
def health_check():
    return {"result": "ok"}


@app.get("/details/{city}")
def find_city(city: CityPath):
    details = get_city_details(city)
    return {"result": details}


@app.get("/weather/current")
def current_weather(lat: Lat, long: Long):
    weather = get_current_weather(lat, long)
    return {"result": weather}


@app.get("/weather/forecast")
def weather_forecast(lat: Lat, long: Long):
    forecast = get_weather_forecast(lat, long)
    return {"result": forecast}


@app.get("/weather/compare")
def compare_cities(city1: CityQuery, city2: CityQuery):
    results = compare_cities_weather(city1, city2)
    return {"result": results}
