import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Thought from '@pages/HomePage/components/ThoughtStreamSection/ThoughtList/Thought';

import {
  isThoughtMenuVisibleSelector,
  showThoughtMenu,
  hideThoughtMenu,
} from '@pages/HomePage/slice';

const ThoughtContainer = ({ thought, ...rest }) => {
  const dispatch = useDispatch();
  const isThoughtMenuVisible = useSelector(isThoughtMenuVisibleSelector({ id: thought.id }));

  const handleContentPress = () => dispatch(showThoughtMenu({ id: thought.id }));
  const handleMenuBackdropPress = () => dispatch(hideThoughtMenu({ id: thought.id} ));

  return (
    <Thought
      {...rest}
      thought={thought}
      isMenuVisible={isThoughtMenuVisible}
      onContentPress={handleContentPress}
      onMenuBackdropPress={handleMenuBackdropPress}
    />
  );
};

export default ThoughtContainer;
