import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon as NativeElementsIcon } from 'react-native-elements';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    padding: 10
  }
});

const Icon = ({
  name,
  type,
  color,
  size,
  containerStyle
}) => (
  <NativeElementsIcon
    name={name}
    type={type}
    color={color}
    size={size}
    containerStyle={[styles.iconContainer, containerStyle]}
  />
);

[Icon.propTypes, Icon.defaultProps] = createPropTypes({
  name: [PropTypes.string, 'web-asset'],
  type: [PropTypes.string, 'material'],
  color: [PropTypes.string, '#f50'],
  size: [PropTypes.number, 25],
  containerStyle: ViewPropTypes.style
});

export default Icon;
