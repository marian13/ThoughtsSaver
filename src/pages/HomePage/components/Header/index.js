import React from 'react';
import { StyleSheet,  View } from 'react-native';
import { Header as NativeHeader } from 'react-native-elements';

import Text from '@components/Text';

const styles = StyleSheet.create({
  view: { width: '100%' }
});

// TODO Workaround: React native elements Header height problem on Andoid.
// See: https://github.com/react-native-elements/react-native-elements/issues/1793
const Header = () => (
  <View style={styles.view}>
    <NativeHeader
      leftComponent={{ icon: 'menu', color: 'white' }}
      centerComponent={<Text white large>Thought Saver</Text>}
    />
  </View>
);

export default Header;
