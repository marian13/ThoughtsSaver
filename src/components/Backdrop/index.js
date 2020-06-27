import React from 'react';
import { StyleSheet } from 'react-native';

import TouchableView from '~/components/TouchableView';

import { compact } from '~/utils/arrays';
import { createPropTypes, PropTypes, ViewPropTypes } from '~/utils/propTypes';

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  eclipse: {
    backgroundColor: 'rgba(0, 0, 0, .4)'
  }
});

const Backdrop = ({ eclipse, onPress, style }) => (
  <TouchableView
    onPress={onPress}
    containerStyle={compact([
      styles.view,
      eclipse && styles.eclipse,
      style
    ])}
  />
);

[Backdrop.propTypes, Backdrop.default] = createPropTypes({
  eclipse: PropTypes.bool,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
});

export default Backdrop;
