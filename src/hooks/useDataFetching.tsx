import { useState, useEffect } from 'react';
import axios from 'axios';

function useDataFetching<T>(url: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if (url) {
        fetchData();
    }

    return () => setData(null); 
}, [url]);


  return { data, loading, error };
}

export default useDataFetching;
