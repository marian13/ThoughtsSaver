import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@components/IconButton';

import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

import {
  TOGGLE_SEARCH_THOUGHT_OPTIONS_COLLAPSE_BUTTON,
  SEARCH_THOUGHT_OPTIONS_COLLAPSE
} from '@pages/HomePage/constants/identifiers';

const ToggleSearchThoughtOptionsCollapseButton = () => {
  const dispatch = useDispatch();

  const isCollapseVisible = useSelector(isVisibleSelector(SEARCH_THOUGHT_OPTIONS_COLLAPSE))

  const handleButtonPress = () => (
    isCollapseVisible ? dispatch(hide(SEARCH_THOUGHT_OPTIONS_COLLAPSE)) : dispatch(show(SEARCH_THOUGHT_OPTIONS_COLLAPSE))
  );

  return (
    <IconButton
      testID={TOGGLE_SEARCH_THOUGHT_OPTIONS_COLLAPSE_BUTTON}
      iconName={isCollapseVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
      onPress={handleButtonPress}
    />
  );
};

export default ToggleSearchThoughtOptionsCollapseButton;
