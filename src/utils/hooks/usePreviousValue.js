
import { useEffect, useRef } from 'react';

// https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/src/usePreviousValue.js
// On each render returns the previous value of the given variable.
const usePreviousValue = value => {
  const prevValue = useRef();

  useEffect(() => {
    prevValue.current = value;

    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
};

export default usePreviousValue;
