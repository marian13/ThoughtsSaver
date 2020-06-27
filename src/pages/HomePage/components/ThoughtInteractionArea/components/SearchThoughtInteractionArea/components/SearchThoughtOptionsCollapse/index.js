import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '~/components/InteractionRow';
import Text from '~/components/Text';
import View from '~/components/View';

import SearchThoughtOption from './components/SearchThoughtOption';

import { isVisibleSelector } from '~/modules/VisibilitiesModule/slice';
import {
  isSearchThoughtByTextOptionSelectedSelector,
  isSearchThoughtByTagOptionSelectedSelector,
  isSearchThoughtFuzzyOptionSelectedSelector
} from '~/pages/HomePage/slice';

import changeSearchThoughtOptionsThunk from './thunks/changeSearchThoughtOptionsThunk';

import {
  SEARCH_THOUGHT_OPTIONS_COLLAPSE,
  SEARCH_THOUGHT_BY_TEXT_OPTION,
  SEARCH_THOUGHT_BY_TAG_OPTION,
  SEARCH_THOUGHT_FUZZY_OPTION
} from '~/pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  outerView: {
    paddingTop: 5,
    flex: 1
  },
  headerText: {
    paddingLeft: 15
  }
});

const SearchThoughtOptionsCollapse = () => {
  const dispatch = useDispatch();

  const isCollapseVisible = useSelector(isVisibleSelector(SEARCH_THOUGHT_OPTIONS_COLLAPSE))

  const isByTextOptionSelected = useSelector(isSearchThoughtByTextOptionSelectedSelector);
  const isByTagOptionSelected = useSelector(isSearchThoughtByTagOptionSelectedSelector);
  const isFuzzyOptionSelected = useSelector(isSearchThoughtFuzzyOptionSelectedSelector);

  const handleOptionPress = option => dispatch(changeSearchThoughtOptionsThunk({ option }));

  return (
    <InteractionRow
      testID={SEARCH_THOUGHT_OPTIONS_COLLAPSE}
      isVisible={isCollapseVisible}
    >
      <View style={styles.outerView}>
        <Text bold style={styles.headerText}>Search options</Text>

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_BY_TEXT_OPTION}
          selected={isByTextOptionSelected}
          text="Search by text"
          onPress={() => handleOptionPress(SEARCH_THOUGHT_BY_TEXT_OPTION)}
        />

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_BY_TAG_OPTION}
          selected={isByTagOptionSelected}
          text="Search by tag"
          onPress={() => handleOptionPress(SEARCH_THOUGHT_BY_TAG_OPTION)}
        />

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_FUZZY_OPTION}
          selected={isFuzzyOptionSelected}
          text="Fuzzy search"
          onPress={() => handleOptionPress(SEARCH_THOUGHT_FUZZY_OPTION)}
        />
      </View>
    </InteractionRow>
  );
};

export default SearchThoughtOptionsCollapse;
