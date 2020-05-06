import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import View from '@components/View';

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
  style: View.propTypes.style
};

OverlayMenuOption.defaultProps = {
  onPress: () => {},
  children: null,
  style: {}
};

export default OverlayMenuOption;
