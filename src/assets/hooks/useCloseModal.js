import { useEffect, useRef } from 'react';

const useCloseModal = (callback) => {
  const domNode = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!domNode.current?.contains(e.target) || e.code === 'Escape') {
        callback();
      }
    };
    document.addEventListener('keydown', handleClickOutside);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return domNode;
};

export default useCloseModal;
