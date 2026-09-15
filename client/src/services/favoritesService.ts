import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/favorites",
    timeout: 10000,
});

export const getFavorites = async (name: string) => {
    const res = await API.get(`/${name}`)
    return res.data
}

export const addFavorites = async () => {
    const res = await API.post("")
    return res.data
}

export const deleteFavorites = async (name: string, city: string) => {
    const res = await API.delete("", {params: {name: name, city: city}})
    return res.data
}
