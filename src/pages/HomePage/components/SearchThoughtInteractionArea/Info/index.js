import React from 'react';
import { StyleSheet } from 'react-native';

import { isEmpty, size } from 'lodash';

import View from '@components/View';
import Text from '@components/Text';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 15
  }
});

const renderText = ({ searchThoughtInputText, searchThoughtResults }) => {
  // HACK Rendering invinsible character to keep height.
  if (isEmpty(searchThoughtInputText)) return ' ';

  if (isEmpty(searchThoughtResults)) return 'No results. Time to investigate this area.';

  if (size(searchThoughtResults) === 1) return '1 result.'

  return `${size(searchThoughtResults)} results found.`;
};

const Info = ({ searchThoughtInputText, searchThoughtResults }) => {
  return (
    <View style={styles.outerView}>
      <View>
        <Text bold style={styles.text}>
          Search for thoughts...
        </Text>
      </View>

      <View>
        <Text reduced>
          {renderText({ searchThoughtInputText, searchThoughtResults })}
        </Text>
      </View>
    </View>
  );
};

export default Info;
