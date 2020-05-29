import React from 'react';
import { StyleSheet } from 'react-native';

import CheckBox from '@components/CheckBox';
import InteractionRow from '@components/InteractionRow';
import Text from '@components/Text';
import TouchableView from '@components/TouchableView';
import View from '@components/View';

import { SEARCH_THOUGHT_OPTIONS_COLLAPSE } from '@pages/HomePage/constants/identifiers';

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
  isVisible
}) => (
  <InteractionRow
    testID={SEARCH_THOUGHT_OPTIONS_COLLAPSE}
    isVisible={isVisible}
  >
    <View style={styles.outerView}>
      <Text bold style={styles.headerText}>Search options</Text>

      <TouchableView horizontal>
        <CheckBox />
        <View centered>
          <Text large>Search by text</Text>
        </View>
      </TouchableView>

      <TouchableView horizontal>
        <CheckBox />
        <View centered>
          <Text large>Search by tag</Text>
        </View>
      </TouchableView>

      <TouchableView horizontal>
        <CheckBox />
        <View centered>
          <Text large>Fuzzy search</Text>
        </View>
      </TouchableView>
    </View>
  </InteractionRow>
);

export default SearchThoughtOptionsCollapse;
