import { useEffect, useState } from "react";
import axios from "axios";

function useFetch<T>({ url }: { url: string }) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [url]);

    return [isLoading, error, data] as const
}

export default useFetch;
