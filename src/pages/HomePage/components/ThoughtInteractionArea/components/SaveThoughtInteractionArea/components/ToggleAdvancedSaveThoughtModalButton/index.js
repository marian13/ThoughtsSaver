import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '~/components/IconButton';

import toggleAdvancedSaveThoughtModalThunk from './thunks/toggleAdvancedSaveThoughtModalThunk';

const ToggleAdvancedSaveThoughtModalButton = () => {
  const dispatch = useDispatch();

  const handleOnPress = () => dispatch(toggleAdvancedSaveThoughtModalThunk());

  return (
    <IconButton
      iconName="markdown"
      iconType="material-community"
      onPress={handleOnPress}
    />
  );
};

export default ToggleAdvancedSaveThoughtModalButton;
