import { useState, useEffect, useCallback } from 'react';
import { Keyboard, Dimensions} from 'react-native';

// https://stackoverflow.com/a/57792001/12201472
export const useComponentSize = () => {
  const [size, setSize] = useState({});

  const onLayout = useCallback(event => {
    const { width, height } = event.nativeEvent.layout;

    setSize({ width, height });
  }, []);

  return [size, onLayout];
};

export const useMountEffect = (effectFunc) => useEffect(effectFunc, []);

// https://stackoverflow.com/a/60682069/12201472
export const useKeyboardHeight = () => {
  const [height, setHeight] = useState(0);

  const handleKeyboardDidShow = event => setHeight(event.endCoordinates.height);
  const handleKeyboardDidHide = () => setHeight(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    };
  }, []);

  return height;
};

export const useWindowHeight = () => Dimensions.get('window').height;
