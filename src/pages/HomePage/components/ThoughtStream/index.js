import React from 'react';
import { StyleSheet, View } from 'react-native';

import FlatList from '@components/FlatList';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const ThoughtStream = ({ thoughts, ThoughtContainer }) => {
  const renderThought = ({ item: thought }) => <ThoughtContainer thought={thought} />;

  return (
    <View style={styles.view}>
      <FlatList
        scrollToBottomOnChange
        items={thoughts}
        renderItem={renderThought}
      />
    </View>
  );
};

export default ThoughtStream;
