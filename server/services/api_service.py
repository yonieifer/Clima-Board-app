import requests
import time

GEO_URL = "https://geocoding-api.open-meteo.com/v1/search"
WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


def get_req(url: str, params: dict | None = None):
    response = requests.get(url, params=params)
    response.raise_for_status()
    return response.json()


def get_city_details(city: str):
    params = {"name": city}
    data = get_req(GEO_URL, params)
    results = data.get("results")

    if not results:
        return

    cities_list = [
        {
            "city": c["name"],
            "country": c["country"],
            "latitude": c["latitude"],
            "longitude": c["longitude"],
        }
        for c in results
    ]

    return cities_list


def get_current_weather(lat, long):
    params = {
        "latitude": lat,
        "longitude": long,
        "current": ",".join(
            [
                "temperature_2m",
                "weather_code",
                "wind_speed_10m",
                "apparent_temperature",
            ]
        ),
    }
    data = get_req(WEATHER_URL, params)

    if not data:
        return

    if type(data) == list:
        return data

    current = data["current"]
    
    return {
        "lat": data["latitude"],
        "long": data["longitude"],
        "time": current["time"],
        "temperature_2m": current["temperature_2m"],
        "weather_code": current["weather_code"],
        "wind_speed_10m": current["wind_speed_10m"],
        "apparent_temperature": current["apparent_temperature"],
    }


def get_weather_forecast(lat, long):
    params = {
        "latitude": lat,
        "longitude": long,
        "daily": ",".join(
            [
                "temperature_2m_mean",
                "weather_code",
                "wind_speed_10m_max",
                "apparent_temperature_mean",
            ]
        ),
    }
    data = get_req(WEATHER_URL, params)

    if not data:
        return

    daily_weather = data["daily"]
    forecast_List = [
        {
            "time": daily_weather["time"][i],
            "temperature_2m_mean": daily_weather["temperature_2m_mean"][i],
            "weather_code": daily_weather["weather_code"][i],
            "wind_speed_10m_max": daily_weather["wind_speed_10m_max"][i],
            "apparent_temperature_mean": daily_weather["apparent_temperature_mean"][i],
        }
        for i in range(len(daily_weather["time"]))
    ]

    return forecast_List


def compare_cities_weather(city1: str, city2: str):
    details1 = get_city_details(city1)[0]
    details2 = get_city_details(city2)[0]

    if not details1 or not details2:
        return

    lats = f"{details1['latitude']},{details2['latitude']}"
    longs = f"{details1['longitude']},{details2['longitude']}"

    results = get_current_weather(lats, longs)
    return [c["current"] for c in results]
