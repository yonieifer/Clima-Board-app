import requests


def get_req(url):
    response = requests.get(url)
    response.raise_for_status()
    return response.json()


def get_city_details(city):
    data = get_req(f"https://geocoding-api.open-meteo.com/v1/search?name={city}")
    results = data.get("results")

    if not results:
        raise ConnectionError(f"faild to find {city} details")

    return results


def get_current_weather(lat, long):
    data = get_req(
        f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&current=temperature_2m,weather_code,wind_speed_10m,apparent_temperature"
    )

    if not data:
        raise ConnectionError("faild to load current weather")

    return data


def get_weather_forecast(lat, long):
    data = get_req(
        f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={long}&daily=temperature_2m_mean,weather_code,wind_speed_10m_max,apparent_temperature_mean"
    )
    if not data:
        raise ConnectionError("failed to load weather forecast")

    return data


def compare_cities_weather(cities: list):
    details = get_city_details(",".join(cities))
    lats = [str(city.get("latitude")) for city in details]
    longs = [str(city.get("longitude")) for city in details]
    results = get_current_weather(",".join(lats), ",".join(longs))
    return results


# def get_weather_for_location(city):
#     details = get_city_details(city)[0]
#     lat, long = details.get("latitude"), details.get("longitude")
#     results = get_current_weather_for_location(lat, long)
#     return results


# print(get_weather_for_location("berlin"))

# print(find_location("london"))
