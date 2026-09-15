import { useState } from "react";
import axios from "axios";

const useGetFavorites = (name) => {
    const [isLoading, setLoading] = useState(false);
        const [error, setError] = useState<AxiosError | null>(null);
        const [data, setData] = useState<T | null>(null);
    
}