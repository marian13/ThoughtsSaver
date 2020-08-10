import { useState, useCallback } from 'react';

// https://stackoverflow.com/a/57792001/12201472
const useComponentSize = () => {
  const [size, setSize] = useState({});

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;

    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

export default useComponentSize;
