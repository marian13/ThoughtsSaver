import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import OverlayMenu from '@components/OverlayMenu';

import ThoughtContent from './ThoughtContent';
import ThoughtMenuOptions from './ThoughtMenuOptions';

import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

import { generateThoughtTestID } from '@utils/generators';

const styles = StyleSheet.create({
  overlayMenuContainer: {
    paddingLeft: 10
  }
});

const Thought = ({ thought }) => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(isVisibleSelector(`thoughtMenu${thought.id}`));

  const handleContentPress = () => dispatch(show(`thoughtMenu${thought.id}`));
  const handleMenuBackdropPress = () => dispatch(hide(`thoughtMenu${thought.id}`));

  return (
    <OverlayMenu
      isVisible={isMenuVisible}
      onContentPress={handleContentPress}
      onBackdropPress={handleMenuBackdropPress}
      renderContent={() => <ThoughtContent testID={generateThoughtTestID(thought.text)} {...thought} />}
      renderOptions={() => <ThoughtMenuOptions thought={thought} />}
      height={100}
      width="50%"
      containerStyle={styles.overlayMenuContainer}
    />
  );
};

export default Thought;

