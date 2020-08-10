import { useState, useEffect } from 'react';
import { Keyboard} from 'react-native';

// https://stackoverflow.com/a/60682069/12201472
const useKeyboardHeight = () => {
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

export default useKeyboardHeight;
