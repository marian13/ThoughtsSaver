import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';
import Text from '@components/Text';
import IconButton from '@components/IconButton';

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  innerView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const NoExactMatchSearchResult = ({ searchText, onCreateTagButtonPress }) => {
  return (
    <View hasTopBorder style={styles.outerView}>
      <IconButton iconName="more-vert" iconColor="#bfbfbf" />

      <View style={styles.innerView}>
        <View>
          <Text>Exact match not found.</Text>
          <Text reduced>Create `{searchText.trim()}`</Text>
          <Text>?</Text>
        </View>

        <IconButton iconName="add" onPress={onCreateTagButtonPress} />
      </View>
    </View>
  );
};

export default NoExactMatchSearchResult;
