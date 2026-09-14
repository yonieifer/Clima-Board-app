import axios from "axios";

const WEATHER_API = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 10000,
});

export const cityDetails = async (name: string) => {
    const res = await WEATHER_API.get(`/weather/details/${name}`);
    return res.data;
};

export const currentWeather = async (lat: number, long: number) => {
    const res = await WEATHER_API.get("/weather/current", {
        params: { lat, long },
    });
    return res.data;
};

export const weatherForecast = async (lat: number, long: number) => {
    const res = await WEATHER_API.get("/weather/forecast", {
        params: { lat, long },
    });
    return res.data;
};

export const compare = async (city1: string, city2: string) => {
    const res = await WEATHER_API.get("/weather/compare", {
        params: { city1, city2 },
    });
    return res.data;
};
