import { useLayoutEffect, useRef } from 'react';

const useFocus = (shouldFocus, focusableRef) => (
  useLayoutEffect(() => {
    shouldFocus ? focusableRef.current.focus() : focusableRef.current.blur();
  }, [shouldFocus])
);

export default useFocus;


