import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import View from '@components/View';
import Text from '@components/Text';

import { searchThoughtTextSelector, searchThoughtResultsSelector } from '@pages/HomePage/slice';

import { isEmpty } from 'lodash';
import { size } from '@utils/arrays';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 15
  }
});

const renderText = ({ searchThoughtText, searchThoughtResults }) => {
  // HACK Rendering invinsible character to keep height.
  if (isEmpty(searchThoughtText)) return ' ';

  if (isEmpty(searchThoughtResults)) return 'No results. Time to investigate this area.';

  if (size(searchThoughtResults) === 1) return '1 result.'

  return `${size(searchThoughtResults)} results found.`;
};

const SearchThoughtInfo = () => {
  const searchThoughtText = useSelector(searchThoughtTextSelector);
  const searchThoughtResults = useSelector(searchThoughtResultsSelector);

  return (
    <View style={styles.outerView}>
      <View>
        <Text bold style={styles.text}>
          Search for thoughts...
        </Text>
      </View>

      <View>
        <Text reduced>
          {renderText({ searchThoughtText, searchThoughtResults })}
        </Text>
      </View>
    </View>
  );
};

export default SearchThoughtInfo;
