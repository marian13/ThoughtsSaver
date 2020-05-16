import React from 'react';

import OverlayMenuOption from '@components/OverlayMenuOption';

import { START_SEARCH_THOUGHT_BY_TEXT_OPTION } from '@pages/HomePage/constants/identifiers';

const GeneralThoughtMenuOptions = ({ onSearchThoughtByTextPress }) => (
  <>
    <OverlayMenuOption
      testID={START_SEARCH_THOUGHT_BY_TEXT_OPTION}
      iconName="text"
      iconType="material-community"
      text="Search by Text"
      onPress={onSearchThoughtByTextPress}
    />
  </>
);

export default GeneralThoughtMenuOptions;
