import { useState, useEffect } from "react";
import { getData } from "./api/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const data = await getData(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
    error,
    setData,
  };
};

export default useFetch;
