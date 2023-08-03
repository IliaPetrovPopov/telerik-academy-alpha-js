import { useEffect, useState } from 'react';

export const useHttp = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          setData(data);
        } else if (data.Response === 'False') {
          setError(data.Error);
        }
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, setLocalData: setData, loading, error };
};
