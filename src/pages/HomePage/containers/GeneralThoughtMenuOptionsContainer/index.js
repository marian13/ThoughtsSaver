import React from 'react';
import { useDispatch } from 'react-redux';

import GeneralThoughtMenuOptions from '@pages/HomePage/components/CreateThoughtInteractionArea/GeneralThoughtMenuOptions';

import startSearchThoughtByTextThunk from '@pages/HomePage/thunks/startSearchThoughtByTextThunk';

const GeneralThoughtMenuOptionsContainer = () => {
  const dispatch = useDispatch();

  const handleSearchThoughtByTextPress = () => dispatch(startSearchThoughtByTextThunk());

  return (
    <GeneralThoughtMenuOptions
      onSearchThoughtByTextPress={handleSearchThoughtByTextPress}
    />
  );
};

export default GeneralThoughtMenuOptionsContainer;
