import { useEffect, useRef } from 'react';

export const useEffectAfterMount = (fn: Function, deps: any[]) => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!!isMounted.current) fn?.();
    if (!isMounted.current) isMounted.current = true;
  }, deps);

}
