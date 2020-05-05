import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IconButton from '@components/IconButton';

import BorderedView from '@components/BorderedView';
import ReducedText from '@components/ReducedText';

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
      <IconButton
        iconName="more-vert"
        iconType="material"
        iconColor="#bfbfbf"
      />

      <View style={styles.view}>
        <View>
          <Text>Exact match not found.</Text>
          <ReducedText>Create `{searchText.trim()}`</ReducedText>
          <Text>?</Text>
        </View>

        <IconButton
          iconName="add"
          iconType="material"
          onPress={onCreateTagButtonPress}
        />
      </View>
    </BorderedView>
  );
};

export default NoExactMatchSearchResult;
