import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header as RNE_Header } from 'react-native-elements';

const styles = StyleSheet.create({
  view: {
    width: '100%'
  },
  centerComponentText: {
    color: 'white',
    fontSize: 20
  }
});

const CenterComponent = () => <Text style={styles.centerComponentText}>Thought Saver</Text>;

// TODO Workaround: React native elements Header height problem on Andoid.
// See: https://github.com/react-native-elements/react-native-elements/issues/1793
const Header = () => (
  <View style={styles.view}>
    <RNE_Header
      leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={<CenterComponent />}
    />
  </View>
);

export default Header;
