import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/weather",
});

export const cityDetails = async (name: string) => {
    const res = await API.get(`/details/${name}`);
    return res.data;
};

export const currentWeather = async (lat: number, long: number) => {
    const res = await API.get("/current", {
        params: { lat, long },
    });
    return res.data;
};

export const weatherForecast = async (lat: number, long: number) => {
    const res = await API.get("/forecast", {
        params: { lat, long },
    });
    return res.data;
};

export const compare = async (city1: string, city2: string) => {
    const res = await API.get("/compare", {
        params: { city1, city2 },
    });
    return res.data;
};
