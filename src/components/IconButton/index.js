import React from 'react';
import { StyleSheet } from 'react-native';

import TouchableView from '@components/TouchableView';
import Icon from '@components/Icon';

import { createPropTypes, PropTypes } from '@utils/propTypes';

const IconButton = ({
  testID,
  iconName,
  iconType,
  iconColor,
  iconSize,
  onPress,
  style
}) => (
  <TouchableView
    testID={testID}
    containerStyle={style}
    onPress={onPress}
  >
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
    />
  </TouchableView>
);

[IconButton.propTypes, IconButton.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  iconName: [PropTypes.string, 'web-asset'],
  iconType: [PropTypes.string, 'material'],
  iconColor: [PropTypes.string, '#f50'],
  iconSize: [PropTypes.number, 25],
  onPress: PropTypes.func
});

export default IconButton;
