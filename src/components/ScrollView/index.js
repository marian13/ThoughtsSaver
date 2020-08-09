import React, { useRef } from 'react';
import { ScrollView as NativeScrollView } from 'react-native';

const ScrollView = ({ scrollToBottomOnChange, ...rest }) => {
  const scrollViewRef = useRef(null);

  const handleContentSizeChange = () => scrollToBottomOnChange && scrollViewRef.current.scrollToEnd();

  return <NativeScrollView onContentSizeChange={handleContentSizeChange} {...rest} />;
};

export default ScrollView;
