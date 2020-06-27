import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import OverlayMenu from '~/components/OverlayMenu';

import ThoughtContent from './ThoughtContent';
import ThoughtMenuOptions from './ThoughtMenuOptions';

import { isVisibleSelector, show, hide } from '~/modules/VisibilitiesModule/slice';

import { getThoughtID } from '~/constants/identifiers';
import { getThoughtMenuID } from '~/pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  overlayMenuContainer: {
    paddingLeft: 10
  }
});

const Thought = ({ thought }) => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(isVisibleSelector(getThoughtMenuID(thought)));

  const handleContentPress = () => dispatch(show(getThoughtMenuID(thought)));
  const handleMenuBackdropPress = () => dispatch(hide(getThoughtMenuID(thought)));

  return (
    <OverlayMenu
      isVisible={isMenuVisible}
      onContentPress={handleContentPress}
      onBackdropPress={handleMenuBackdropPress}
      renderContent={() => <ThoughtContent testID={getThoughtID(thought)} {...thought} />}
      renderOptions={() => <ThoughtMenuOptions thought={thought} />}
      height={100}
      width="50%"
      containerStyle={styles.overlayMenuContainer}
    />
  );
};

export default Thought;

