import React from 'react';

import TouchableView from '~/components/TouchableView';
import Icon from '~/components/Icon';

import { createPropTypes, PropTypes } from '~/utils/propTypes';

const IconButton = ({
  testID,
  disabled,
  iconName,
  iconType,
  iconColor,
  iconSize,
  onPress,
  style
}) => (
  <TouchableView
    testID={testID}
    disabled={disabled}
    containerStyle={style}
    onPress={onPress}
  >
    <Icon
      disabled={disabled}
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
    />
  </TouchableView>
);

[IconButton.propTypes, IconButton.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  disabled: PropTypes.bool,
  iconName: [PropTypes.string, 'web-asset'],
  iconType: [PropTypes.string, 'material'],
  iconColor: [PropTypes.string, '#f50'],
  iconSize: [PropTypes.number, 25],
  onPress: PropTypes.func
});

export default IconButton;
