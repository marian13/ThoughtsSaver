import React from 'react';
import { useDispatch } from 'react-redux';

import OverlayMenuOption from '@components/OverlayMenuOption';

import startSearchThoughtThunk from '@pages/HomePage/thunks/startSearchThoughtThunk';

import { START_SEARCH_THOUGHT_OPTION } from '@pages/HomePage/constants/identifiers';

const GeneralThoughtMenuOptions = () => {
  const dispatch = useDispatch();

  const handleSearchOptionPress = () => dispatch(startSearchThoughtThunk());

  return (
    <>
      <OverlayMenuOption
        testID={START_SEARCH_THOUGHT_OPTION}
        iconName="text"
        iconType="material-community"
        text="Search"
        onPress={handleSearchOptionPress}
      />
    </>
  );
};

export default GeneralThoughtMenuOptions;
