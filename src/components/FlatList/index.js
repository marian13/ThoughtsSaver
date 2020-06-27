import React, { useRef } from 'react';
import { View, FlatList as NativeFlatList } from 'react-native';

import { createPropTypes, PropTypes } from '~/utils/propTypes';

const FlatList = ({
  scrollToBottomOnChange,
  items,
  keyName,
  renderItem,
  ListFooterComponent
}) => {
  const scrollViewRef = useRef(null);

  const handleContentSizeChange = () => scrollToBottomOnChange && scrollViewRef.current.scrollToEnd();

  const keyExtractor = item => (item[keyName] || item['id']).toString();

  // IMPORTANT <View> is mandatory here. Parent 'justifyContent' is not working without it.
  return (
    <View>
      <NativeFlatList
        ref={scrollViewRef}
        onContentSizeChange={handleContentSizeChange}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

[FlatList.propTypes, Flatlist] = createPropTypes({
  scrollToBottomOnChange: PropTypes.bool,
  items: PropTypes.array,
  keyName: PropTypes.string,
  renderItem: PropTypes.func,
  ListFooterComponent: PropTypes.elementType
});

export default FlatList;
