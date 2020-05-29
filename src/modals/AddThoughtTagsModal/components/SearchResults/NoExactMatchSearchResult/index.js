import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';
import Text from '@components/Text';
import IconButton from '@components/IconButton';

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

const NoExactMatchSearchResult = ({ searchText, onCreateTagButtonPress }) => {
  return (
    <View hasTopBorder style={styles.outerView}>
      <IconButton iconName="add" onPress={onCreateTagButtonPress} />

      <View style={styles.innerView}>
        <Text large reduced>No exact match. Create "{searchText.trim()}"?</Text>
      </View>
    </View>
  );
};

export default NoExactMatchSearchResult;
