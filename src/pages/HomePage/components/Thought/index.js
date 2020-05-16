import React from 'react';
import { StyleSheet } from 'react-native';

import ThoughtContent from './ThoughtContent';

import OverlayMenu from '@components/OverlayMenu';

const styles = StyleSheet.create({
  overlayMenuContainer: {
    paddingLeft: 10
  }
})

const Thought = ({
  testID,
  isMenuVisible,
  thought,
  onContentPress,
  onMenuBackdropPress,
  ThoughtMenuOptionsContainer
}) => (
  <OverlayMenu
    isVisible={isMenuVisible}
    onContentPress={onContentPress}
    onBackdropPress={onMenuBackdropPress}
    renderContent={() => <ThoughtContent testID={testID} {...thought} />}
    renderOptions={() => <ThoughtMenuOptionsContainer thought={thought} />}
    height={100}
    width="50%"
    containerStyle={styles.overlayMenuContainer}
  />
);

export default Thought;

