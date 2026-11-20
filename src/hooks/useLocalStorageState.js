import { useEffect, useState } from 'react';

export function readStored(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => readStored(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
