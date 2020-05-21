import React from 'react';
import { StyleSheet } from 'react-native';

import TouchableView from '@components/TouchableView';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});

const Backdrop = ({ onPress, style }) => (
  <TouchableView onPress={onPress} style={[styles.view, style]} />
);

[Backdrop.propTypes, Backdrop.default] = createPropTypes({
  onPress: PropTypes.func,
  style: ViewPropTypes.style
});

export default Backdrop;
