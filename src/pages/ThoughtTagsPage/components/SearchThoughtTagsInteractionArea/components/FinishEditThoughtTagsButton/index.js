import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import IconButton from '@components/IconButton';

import finishEditThoughtTagsThunk from './thunks/finishEditThoughtTagsThunk';

import { HOME_PAGE } from '@pages/HomePage/constants/identifiers';

const FinishEditThoughtTagsButton = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleButtonPress = () => {
    dispatch(finishEditThoughtTagsThunk());

    navigate(HOME_PAGE);
  };

  return <IconButton iconName="check-circle" onPress={handleButtonPress} />;
};

export default FinishEditThoughtTagsButton;
