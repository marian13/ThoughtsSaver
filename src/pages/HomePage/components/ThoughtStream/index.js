import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import FlatList from '@components/FlatList';

import Thought from '@pages/HomePage/components/Thought';

import { thoughtsSelector } from '@modules/ThoughtsModule/slice';
import {
  isSearchThoughtModeSelector,
  searchThoughtTextSelector,

  searchThoughtResultsSelector
} from '@pages/HomePage/slice';

import { THOUGHT_STREAM } from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const ThoughtStream = () => {
  const isSearchMode = useSelector(isSearchThoughtModeSelector);
  const searchInputText = useSelector(searchThoughtTextSelector);

  const thoughts = useSelector(thoughtsSelector);
  const searchResults = useSelector(searchThoughtResultsSelector);

  const items = isSearchMode && searchInputText ? searchResults : thoughts;
  const renderItem = ({ item }) => <Thought thought={item} />;

  return (
    <View testID={THOUGHT_STREAM} style={styles.view}>
      <FlatList scrollToBottomOnChange items={items} renderItem={renderItem} />
    </View>
  );
};

export default ThoughtStream;
