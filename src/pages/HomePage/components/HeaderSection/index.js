import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from 'react-native-elements';

const styles = StyleSheet.create({
  headerCenterText: {
    color: 'white',
    fontSize: 20
  },
  headerSectionView: {
    width: '100%'
  }
});

const HeaderCentralComponent = () => (
  <Text style={styles.headerCenterText}>Thought Saver</Text>
);

// TODO Workaround: Header height problem on Andoid.
// See: https://github.com/react-native-elements/react-native-elements/issues/1793
const HeaderSection = () => {
  return (
    <View style={styles.headerSectionView}>
      <Header
        leftComponent={{ icon: 'menu', color: 'white' }}
        centerComponent={<HeaderCentralComponent />}
      />
    </View>
  );
};

export default HeaderSection;
