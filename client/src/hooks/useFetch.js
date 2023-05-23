import { useEffect, useRef, useState } from "react";
import { makeRequest } from "../utils/makeReques";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const prevUrl = useRef();
  const prevOptions = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url, options);
        setData(res.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    // Verificar si las opciones han cambiado antes de realizar la solicitud
    if (url !== prevUrl.current || JSON.stringify(options) !== JSON.stringify(prevOptions.current)) {
      prevUrl.current = url;
      prevOptions.current = options;
      fetchData();
    }
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;