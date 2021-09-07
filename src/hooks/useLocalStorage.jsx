import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = JSON.parse(localStorage.getItem(key));

    // if key:value pair is not already saved in local storage, return initialValue
    if (jsonValue === null) return initialValue;

    if (jsonValue) return jsonValue;
  });

  useEffect(() => {
    const jsonValue = JSON.stringify(value);

    // saves key-value pair to local storage.
    localStorage.setItem(key, jsonValue);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
