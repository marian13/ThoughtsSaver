import React from 'react';
import { StyleSheet } from 'react-native';

import TouchableWithoutFeedbackView from '@components/TouchableWithoutFeedbackView';
import Icon from '@components/Icon';
import Text from '@components/Text';
import View from '@components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    height: 50
  },
  iconContainer: {
    justifyContent: 'center',
    padding: 10
  }
});

const OverlayMenuOption = ({
  testID,
  iconName,
  iconType,
  iconColor,
  text,
  onPress,
  style
}) => (
  <TouchableWithoutFeedbackView
    testID={testID}
    onPress={onPress}
    style={[styles.touchable, style]}
  >
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      containerStyle={styles.iconContainer}
    />

    <View centered>
      <Text large>{text}</Text>
    </View>
  </TouchableWithoutFeedbackView>
);

[OverlayMenuOption.propTypes, OverlayMenuOption.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  iconName: [PropTypes.string, 'web-asset'],
  iconType: [PropTypes.string, 'material'],
  iconColor: [PropTypes.string, '#517fa4'],
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
});

export default OverlayMenuOption;
