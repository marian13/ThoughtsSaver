import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import View from '@components/View';

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

InteractionRow.propTypes = {
  children: PropTypes.node,
  style: View.propTypes.style
};

InteractionRow.defaultTypes = {
  children: null,
  style: {}
};

export default InteractionRow;
