import React from 'react';
import { TouchableOpacity, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const OverlayMenuOption = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

OverlayMenuOption.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  style: ViewPropTypes.style
};

OverlayMenuOption.defaultProps = {
  onPress: () => {},
  children: null,
  style: {}
};

export default OverlayMenuOption;
