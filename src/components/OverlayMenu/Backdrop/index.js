import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

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
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.view, style]} />
  </TouchableWithoutFeedback>
);

Backdrop.propTypes = {
  onPress: PropTypes.func,
  style: ViewPropTypes.style
};

Backdrop.default = {
  onPress: () => {},
  style: {}
};

export default Backdrop;
