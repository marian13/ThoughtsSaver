import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements';

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
  },
  text: {
    fontSize: 20
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
      <Text style={styles.text}>{text}</Text>
    </CenteredView>
  </OverlayMenuOption>
);

export default ThoughtMenuOption;



