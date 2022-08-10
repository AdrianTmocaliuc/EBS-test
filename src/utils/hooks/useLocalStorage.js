import { useState, useEffect } from 'react';

const useLocalStorage = () => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;
