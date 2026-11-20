import { useEffect, useState } from 'react';

export function useFetchJson(url) {
  const [result, setResult] = useState({ status: 'loading', data: null, error: null });

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!ignore) setResult({ status: 'ready', data, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult({ status: 'error', data: null, error: error.message });
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return result;
}
