import { useEffect, useState } from 'react';

const DEFAULT_DELAY_VALUE = 500;

const useDebounce = <T>(value: T, delay: number = DEFAULT_DELAY_VALUE): T =>{
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debouncedValue;
};

export default useDebounce;
