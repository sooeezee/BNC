import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 700) {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
}
