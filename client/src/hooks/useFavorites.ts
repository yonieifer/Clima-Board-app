import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import {
    addFavorites,
    deleteFavorites,
    getFavorites,
} from "../services/favoritesService";

export const useGetFavorites = <T>(name: string) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        getFavorites(name)
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [name, data]);

    return { isLoading, error, data };
};

export const useAddFavorite = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<string | null>(null);

    const add = (name: string, city: string) => {
        setLoading(true);
        addFavorites(name, city)
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    };

    return { add, isLoading, error, data };
};

export const useDeleteFavorite = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [data, setData] = useState<string | null>(null);

    const remove = (name: string, city: string) => {
        setLoading(true);
        deleteFavorites(name, city)
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    };

    return { remove, isLoading, error, data };
};
