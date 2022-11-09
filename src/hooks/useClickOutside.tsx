import { RefObject, useEffect } from 'react';

export function useClickOutside<Type extends HTMLElement>(ref: RefObject<Type>, callback: () => void, state?: boolean) {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    };
    if (state) {
      document.addEventListener('click', handleClick);
    }
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, state, callback]);
}
