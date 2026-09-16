import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/favorites",
});

export const getFavorites = async (name: string) => {
    const res = await API.get(`/${name.toLowerCase()}`);
    return res.data;
};

export const addFavorites = async (name: string, city: string) => {
    const res = await API.post("", {}, { params: { name: name.toLowerCase(), city: city.toLowerCase() } });
    return res.data;
};

export const deleteFavorites = async (name: string, city: string) => {
    const res = await API.delete("", { params: { name: name.toLowerCase(), city: city.toLowerCase() } });
    return res.data;
};
