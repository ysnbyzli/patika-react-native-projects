import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useGet(url, dependency = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [stringifiedInit] = [JSON.stringify(dependency)];

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [stringifiedInit]);

  return [data, loading, error];
}
