import { useEffect, useState } from "react";
import {
    cityDetails,
    currentWeather,
    weatherForecast,
    compare,
} from "../services/weatherService";

export function useCityDetails<T>(name: string) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        cityDetails(name)
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [name]);

    return [isLoading, error, data] as const;
}

export function useCurrentWeather<T>(lat: number, long: number) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        currentWeather(lat, long)
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [lat, long]);

    return [isLoading, error, data] as const;
}

export function useWeatherForecast<T>(lat: number, long: number) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        weatherForecast(lat, long)
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [lat, long]);

    return [isLoading, error, data] as const;
}

export function useCompare<T>(city1: string, city2: string) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        compare(city1, city2)
            .then((res) => setData(res))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [city1, city2]);

    return [isLoading, error, data] as const;
}
