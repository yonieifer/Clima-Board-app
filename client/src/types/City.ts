export type CurrentCityWeather = {
    lat: number;
    long: number;
    time: string;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    apparent_temperature: number;
};

export type CityDetailsType = {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
};

export type DailyForecastType = {
    time: string;
    temperature_2m_mean: number;
    weather_code: number;
    wind_speed_10m_max: number;
    apparent_temperature_mean: number;
};
