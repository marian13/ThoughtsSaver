import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoExactMatchSearchResult from '@modals/AddThoughtTagsModal/components/SearchResults/NoExactMatchSearchResult';

import {
  doesSearchThoughtTagsHasExactMatchResultSelector,
  searchThoughtTagsInputTextSelector
} from '@modals/AddThoughtTagsModal/slice';

import tagCreateButtonThunk from '@modals/AddThoughtTagsModal/thunks/tagCreateButtonThunk';

const NoExactMatchSearchResultContainer = () => {
  const dispatch = useDispatch();

  const doesSearchThoughtTagsHasExactMatchResult = useSelector(doesSearchThoughtTagsHasExactMatchResultSelector);
  const searchThoughtTagsInputText = useSelector(searchThoughtTagsInputTextSelector);

  const handleCreateTagButtonPress = () => dispatch(tagCreateButtonThunk());

  if (doesSearchThoughtTagsHasExactMatchResult) return null;
  if (!searchThoughtTagsInputText) return null;

  return (
    <NoExactMatchSearchResult
      searchText={searchThoughtTagsInputText}
      onCreateTagButtonPress={handleCreateTagButtonPress}
    />
  );
};

export default NoExactMatchSearchResultContainer;

