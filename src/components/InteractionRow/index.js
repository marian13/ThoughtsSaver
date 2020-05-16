import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  outerView: {
    minHeight: 45,
    justifyContent: 'flex-end'
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});

const InteractionRow = ({ children, style }) => (
  <View avoidKeyboard style={[styles.outerView, style]}>
    <View hasTopBorder style={styles.innerView}>
      {children}
    </View>
  </View>
);

InteractionRow.propTypes = createPropTypes({
  children: PropTypes.node,
  style: ViewPropTypes.style
});

export default InteractionRow;
