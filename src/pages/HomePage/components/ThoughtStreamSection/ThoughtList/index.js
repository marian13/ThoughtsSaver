import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';

const ThoughtList = ({ thoughts, ThoughtContainer, ...rest }) => {
  const scrollViewRef = useRef(null);

  const renderThought = ({ item: thought }) => (
    <ThoughtContainer
      {...rest}
      thought={thought}
    />
  );

  // IMPORTANT <View> is mandatory here. Parent 'justifyContent' is not working without it.
  return (
    <View>
      <FlatList
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
        data={thoughts}
        renderItem={renderThought}
        keyExtractor={thought => thought.id}
      />
    </View>
  );
};

export default ThoughtList;
