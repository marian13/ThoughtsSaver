import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Thought from '@pages/HomePage/components/Thought';

import ThoughtMenuOptionsContainer from '@pages/HomePage/containers/ThoughtMenuOptionsContainer';

import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

const ThoughtContainer = ({ thought }) => {
  const dispatch = useDispatch();
  const isThoughtMenuVisible = useSelector(isVisibleSelector(`thoughtMenu${thought.id}`));

  const handleContentPress = () => dispatch(show(`thoughtMenu${thought.id}`));
  const handleMenuBackdropPress = () => dispatch(hide(`thoughtMenu${thought.id}`));

  return (
    <Thought
      isMenuVisible={isThoughtMenuVisible}
      thought={thought}
      onContentPress={handleContentPress}
      onMenuBackdropPress={handleMenuBackdropPress}
      ThoughtMenuOptionsContainer={ThoughtMenuOptionsContainer}
    />
  );
};

export default ThoughtContainer;
