import requests

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
        raise ValueError(f"failed to find {city} details")

    return results


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
        raise ValueError("failed to load current weather")

    return data


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
        raise ValueError("failed to load weather forecast")

    return data


def compare_cities_weather(city1: str, city2: str):
    details1 = get_city_details(city1)[0]
    details2 = get_city_details(city2)[0]

    lats = f"{details1['latitude']},{details2['latitude']}"
    longs = f"{details1['longitude']},{details2['longitude']}"

    results = get_current_weather(lats, longs)
    return results


print(get_city_details("berlin"))
