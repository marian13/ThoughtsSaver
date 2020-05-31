import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionRow from '@components/InteractionRow';
import Text from '@components/Text';
import View from '@components/View';

import SearchThoughtOption from './SearchThoughtOption';

import { createSet, has } from '@utils/sets';

import {
  SEARCH_THOUGHT_OPTIONS_COLLAPSE,
  SEARCH_THOUGHT_BY_TEXT_OPTION,
  SEARCH_THOUGHT_BY_TAG_OPTION,
  SEARCH_THOUGHT_FUZZY_OPTION
} from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  outerView: {
    paddingTop: 5,
    flex: 1
  },
  headerText: {
    paddingLeft: 15
  }
});

const SearchThoughtOptionsCollapse = ({
  isVisible,
  options,
  onOptionPress
}) => {
  const set = createSet(options);

  return (
    <InteractionRow
      testID={SEARCH_THOUGHT_OPTIONS_COLLAPSE}
      isVisible={isVisible}
    >
      <View style={styles.outerView}>
        <Text bold style={styles.headerText}>Search options</Text>

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_BY_TEXT_OPTION}
          selected={has(set, SEARCH_THOUGHT_BY_TEXT_OPTION)}
          text="Search by text"
          onPress={() => onOptionPress(SEARCH_THOUGHT_BY_TEXT_OPTION)}
        />

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_BY_TAG_OPTION}
          selected={has(set, SEARCH_THOUGHT_BY_TAG_OPTION)}
          text="Search by tag"
          onPress={() => onOptionPress(SEARCH_THOUGHT_BY_TAG_OPTION)}
        />

        <SearchThoughtOption
          testID={SEARCH_THOUGHT_FUZZY_OPTION}
          selected={has(set, SEARCH_THOUGHT_FUZZY_OPTION)}
          text="Fuzzy search"
          onPress={() => onOptionPress(SEARCH_THOUGHT_FUZZY_OPTION)}
        />
      </View>
    </InteractionRow>
  );
};

export default SearchThoughtOptionsCollapse;
