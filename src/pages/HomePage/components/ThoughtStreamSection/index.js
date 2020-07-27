import React from 'react';
import { StyleSheet, View } from 'react-native';

import ThoughtList from './ThoughtList';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const ThoughtStreamSection = ({ thoughts, ...rest }) => (
  <View style={styles.view}>
    <ThoughtList {...rest} thoughts={thoughts} />
  </View>
);

export default ThoughtStreamSection;
