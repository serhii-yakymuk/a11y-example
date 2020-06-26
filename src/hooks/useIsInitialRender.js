import { useRef, useEffect } from 'react';

const useIsInitialRender = () => {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = false;
  });

  return ref;
};

export default useIsInitialRender;
