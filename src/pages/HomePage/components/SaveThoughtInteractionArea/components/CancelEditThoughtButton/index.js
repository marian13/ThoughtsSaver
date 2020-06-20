import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@components/IconButton';

import cancelEditThoughtThunk from './thunks/cancelEditThoughtThunk';

const CancelEditThoughtButton = () => {
  const dispatch = useDispatch();

  const handleButtonPress = () => dispatch(cancelEditThoughtThunk());

  return <IconButton iconName="close" onPress={handleButtonPress} />;
};

export default CancelEditThoughtButton;
