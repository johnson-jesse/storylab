import React from 'react';
import useMountedRef from './useMountedRef';

/**
 * For handling when components unmount during async.
 * Replacement for isSubscribed scheme.
 *
 * @param dispatch
 * @returns dispatch but safe
 */
function useSafeDispatch<T>(dispatch: React.Dispatch<T>) {
  const mounted = useMountedRef();
  return React.useCallback((arg: T) => (mounted.current ? dispatch(arg) : void 0), [dispatch, mounted]);
}

export default useSafeDispatch;
