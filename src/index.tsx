import * as React from 'react';

const useSSRLayoutEffect =
  typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

export function useIsMounted() {
  const isMounted = React.useRef(false);
  useSSRLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

export default function useSafeCallback<
  Arguments extends Array<any> = any[],
  ReturnValue = any
>(callback: (...args: Arguments) => ReturnValue) {
  const isMounted = useIsMounted();
  return React.useCallback(
    (...args: Arguments) => (isMounted.current ? callback(...args) : void 0),
    [callback]
  );
}
