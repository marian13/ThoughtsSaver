import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Text from '@components/Text';
import CenteredView from '@components/CenteredView';
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

    <CenteredView>
      <Text large>{text}</Text>
    </CenteredView>
  </OverlayMenuOption>
);

export default ThoughtMenuOption;



