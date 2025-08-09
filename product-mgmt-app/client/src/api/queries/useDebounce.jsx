import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = ({ value, delay = 1500 }) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(value);
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
};
