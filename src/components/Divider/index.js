import React from 'react';
import { StyleSheet } from 'react-native';

import { Divider as RNEDivider } from 'react-native-elements';

const styles = StyleSheet.create({
  divider: {
    height: 1
  }
});

const Divider = () => <RNEDivider style={styles.divider} />;

export default Divider;
