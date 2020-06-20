import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@components/IconButton';

import finishSearchThoughtThunk from './thunks/finishSearchThoughtThunk';

const FinishSearchThoughtButton = () => {
  const dispatch = useDispatch();

  const handleButtonPress = () => dispatch(finishSearchThoughtThunk());

  return <IconButton iconName="check-circle" onPress={handleButtonPress} />;
};

export default FinishSearchThoughtButton;

