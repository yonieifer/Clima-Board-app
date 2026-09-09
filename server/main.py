from fastapi import FastAPI
from services.api_service import get_city_details, get_current_weather, get_weather_forecast, compare_cities_weather

app = FastAPI()


@app.get("/health")
def health_check():
    return {"result": "ok"}


@app.get("/details/{city}")
def find_city(city):
    details = get_city_details(city)
    return {"result": details}


@app.get("/weather/current")
def current_weather(lat, long):
    weather = get_current_weather(lat, long)
    return {"result": weather}


@app.get("weather/forecast")
def weather_forecast(lat, long):
    forecast = get_weather_forecast(lat, long)
    return {"result": forecast}


@app.get("/weather/compare")
def compare_cities(cities):
    results = compare_cities_weather(cities)
    return {"result": results}
