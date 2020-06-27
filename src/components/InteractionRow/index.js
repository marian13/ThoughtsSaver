import React from 'react';
import { StyleSheet } from 'react-native';

import View from '~/components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '~/utils/propTypes';

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

const InteractionRow = ({ isVisible, children, style }) => (
  <View avoidKeyboard displayed={isVisible} style={[styles.outerView, style]}>
    <View hasTopBorder style={styles.innerView}>
      {children}
    </View>
  </View>
);

[InteractionRow.propTypes, InteractionRow.defaultProps] = createPropTypes({
  isVisible: [PropTypes.bool, true],
  children: PropTypes.any,
  style: ViewPropTypes.style
});

export default InteractionRow;
