import React from 'react';

function useMountedRef() {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}

export default useMountedRef;
