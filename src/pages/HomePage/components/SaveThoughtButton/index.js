import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@components/IconButton';

import { isCreateThoughtModeSelector, thoughtTextSelector } from '@pages/HomePage/slice';

import saveThoughtThunk from './thunks/saveThoughtThunk';

import { toBool } from '@utils/booleans';

import { SAVE_THOUGHT_BUTTON } from '@pages/HomePage/constants/identifiers';

const SaveThoughtButton = () => {
  const dispatch = useDispatch();

  const isCreateMode = useSelector(isCreateThoughtModeSelector);

  const thoughtText = useSelector(thoughtTextSelector);

  const handleButtonPress = () => dispatch(saveThoughtThunk());

  return (
    <IconButton
      testID={SAVE_THOUGHT_BUTTON}
      disabled={!toBool(thoughtText)}
      iconName={isCreateMode ? 'send' : 'check-circle'}
      onPress={handleButtonPress}
    />
  );
};

export default SaveThoughtButton;
