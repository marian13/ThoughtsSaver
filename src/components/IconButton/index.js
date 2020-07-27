import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    padding: 10
  }
});

const IconButton = ({
  iconName,
  iconType,
  iconColor,
  iconSize,
  onPress,
  style
}) => (
  <View style={[styles.view, style]}>
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
      onPress={onPress}
    />
  </View>
);

IconButton.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  onPress: PropTypes.func
};

IconButton.defaultProps = {
  iconName: 'web-asset',
  iconType: 'material',
  iconColor: '#f50',
  iconSize: 25,
  onPress: () => {}
};

export default IconButton;
