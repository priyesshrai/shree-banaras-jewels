'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(uri) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!uri) {
            setError(new Error("Invalid API URL. Please provide a valid URL."));
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await axios.get(uri);

                if (response && response.data) {
                    // console.log(response.data);
                    setData(response.data);
                } else {
                    throw new Error("No data found in response.");
                }
            } catch (err) {
                setError(err);
                console.error("Error while fetching data:", err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [uri]);

    return { data, loading, error };
}
