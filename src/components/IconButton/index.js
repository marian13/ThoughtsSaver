import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import TouchableWithoutFeedbackView from '@components/TouchableWithoutFeedbackView';

import { createPropTypes, PropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    padding: 10
  }
});

const IconButton = ({
  testID,
  iconName,
  iconType,
  iconColor,
  iconSize,
  onPress,
  style
}) => (
  <TouchableWithoutFeedbackView
    testID={testID}
    style={[styles.view, style]}
    onPress={onPress}
  >
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
    />
  </TouchableWithoutFeedbackView>
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
