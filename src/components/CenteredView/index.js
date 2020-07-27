import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignContent: 'center'
  }
});

const CenteredView = ({ children, style, ...rest }) => (
  <View {...rest} style={[styles.view, style]}>
    {children}
  </View>
);

CenteredView.propTypes = {
  children: PropTypes.node,
  style: ViewPropTypes.style
};

CenteredView.defaultProps = {
  children: null,
  style: {}
};

export default CenteredView;
