import React from 'react';
import { StyleSheet, View } from 'react-native';

import IconButton from '@components/IconButton';

import BorderedView from '@components/BorderedView';
import Text from '@components/Text';

const styles = StyleSheet.create({
  borderedView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const NoExactMatchSearchResult = ({ searchText, onCreateTagButtonPress }) => {
  return (
    <BorderedView hasTopBorder style={styles.borderedView}>
      <IconButton iconName="more-vert" iconColor="#bfbfbf" />

      <View style={styles.view}>
        <View>
          <Text>Exact match not found.</Text>
          <Text reduced>Create `{searchText.trim()}`</Text>
          <Text>?</Text>
        </View>

        <IconButton iconName="add" onPress={onCreateTagButtonPress} />
      </View>
    </BorderedView>
  );
};

export default NoExactMatchSearchResult;
