import React from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '~/components/IconButton';

import cancelSearchThoughtThunk from './thunks/cancelSearchThoughtThunk';

const CancelSearchThoughtButton = () => {
  const dispatch = useDispatch();

  const handleButtonPress = () => dispatch(cancelSearchThoughtThunk());

  return <IconButton iconName="close" onPress={handleButtonPress} />;
};

export default CancelSearchThoughtButton;
