import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '~/components/IconButton';
import Text from '~/components/Text';
import View from '~/components/View';

import {
  doesSearchThoughtTagsHasExactMatchResultSelector,
  searchThoughtTagsTextSelector
} from '~/pages/ThoughtTagsPage/slice';

import createTagThunk from './thunks/createTagThunk';

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    height: 50
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 15
  }
});

const NoExactMatchSearchResult = () => {
  const dispatch = useDispatch();

  const isExactMatch = useSelector(doesSearchThoughtTagsHasExactMatchResultSelector);
  const searchText = useSelector(searchThoughtTagsTextSelector);

  const handleCreatePress = () => dispatch(createTagThunk());

  if (isExactMatch) return null;
  if (!searchText) return null;

  return (
    <View hasTopBorder style={styles.outerView}>
      <IconButton iconName="add" onPress={handleCreatePress} />

      <View style={styles.innerView}>
        <Text large reduced>No exact match. Create "{searchText.trim()}"?</Text>
      </View>
    </View>
  );
};

export default NoExactMatchSearchResult;
