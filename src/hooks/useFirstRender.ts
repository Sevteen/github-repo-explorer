import * as React from 'react';

function useIsFirstRender(): boolean {
  const isFirst = React.useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

export default useIsFirstRender;
