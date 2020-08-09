import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '~/components/IconButton';

import { isThoughtPreviewModeSelector } from '~/pages/HomePage/slice';

import startThoughtPreviewModeThunk from '~/pages/HomePage/thunks/startThoughtPreviewModeThunk';
import finishThoughtPreviewModeThunk from '~/pages/HomePage/thunks/finishThoughtPreviewModeThunk';

const ToggleThoughtPreviewModeButton = () => {
  const dispatch = useDispatch();

  const isThoughtPreviewMode = useSelector(isThoughtPreviewModeSelector);

  const handleOnPress = () => {
    if (isThoughtPreviewMode) {
      dispatch(finishThoughtPreviewModeThunk());
    } else {
      dispatch(startThoughtPreviewModeThunk());
    }
  };

  return (
    <IconButton
      iconName="markdown"
      iconType="material-community"
      onPress={handleOnPress}
    />
  );
};

export default ToggleThoughtPreviewModeButton;
