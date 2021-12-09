/* globals document */

import { useEffect } from 'react';

const useEscKeydown = (handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode !== 27) {
        return;
      }

      handler(e);
    };

    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [handler]);
};

export default useEscKeydown;
