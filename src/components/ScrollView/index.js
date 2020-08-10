import React, { useRef } from 'react';
import { ScrollView as NativeScrollView } from 'react-native';

import { useScrollToBottom } from '~/utils/hooks';

const ScrollView = ({ scrollToBottomOnChange, ...rest }) => {
  const scrollViewRef = useRef(null);

  const maybeScrollToBottom = useScrollToBottom(scrollToBottomOnChange, scrollViewRef);

  return <NativeScrollView ref={scrollViewRef} onContentSizeChange={maybeScrollToBottom} {...rest} />;
};

export default ScrollView;
