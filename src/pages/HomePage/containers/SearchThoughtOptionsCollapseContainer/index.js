import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtOptionsCollapse from '@pages/HomePage/components/SearchThoughtInteractionArea/SearchThoughtOptionsCollapse';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';

import { searchThoughtOptionsSelector } from '@pages/HomePage/slice';

import changeSearchThoughtOptionsThunk from '@pages/HomePage/thunks/changeSearchThoughtOptionsThunk';

import { SEARCH_THOUGHT_OPTIONS_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const SearchThoughtOptionsCollapseContainer = () => {
  const dispatch = useDispatch();

  const isSearchThoughtOptionsVisible = useSelector(isVisibleSelector(SEARCH_THOUGHT_OPTIONS_COLLAPSE))

  const searchThoughtOptions = useSelector(searchThoughtOptionsSelector);

  const handleSearchThoughtOptionsChange = option => dispatch(changeSearchThoughtOptionsThunk({ option }));

  return (
    <SearchThoughtOptionsCollapse
      isVisible={isSearchThoughtOptionsVisible}
      options={searchThoughtOptions}
      onOptionPress={handleSearchThoughtOptionsChange}
    />
  );
};

export default SearchThoughtOptionsCollapseContainer;
