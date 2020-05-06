import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import View from '@components/View';
import Text from '@components/Text';
import OverlayMenuOption from '@components/OverlayMenuOption';

const styles = StyleSheet.create({
  overlayMenuOption: {
    flexDirection: 'row',
    height: 50
  },
  iconContainer: {
    justifyContent: 'center',
    padding: 10
  }
});

const ThoughtMenuOption = ({ text, iconName, iconType, onPress, ...rest }) => (
  <OverlayMenuOption {...rest} onPress={onPress} style={styles.overlayMenuOption}>
    <Icon
      name={iconName}
      type={iconType}
      color="#517fa4"
      size={25}
      containerStyle={styles.iconContainer}
    />

    <View centered>
      <Text large>{text}</Text>
    </View>
  </OverlayMenuOption>
);

export default ThoughtMenuOption;



