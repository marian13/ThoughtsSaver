import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoExactMatchSearchResult from '@modals/AddThoughtTagsModal/components/SearchResults/NoExactMatchSearchResult';

import {
  doesThoughtTagsSearchHasExactMatchResultSelector,
  thoughtTagsSearchTextSelector
} from '@modals/AddThoughtTagsModal/slice';

import tagCreateButtonThunk from '@modals/AddThoughtTagsModal/thunks/tagCreateButtonThunk';

const NoExactMatchSearchResultContainer = () => {
  const dispatch = useDispatch();

  const doesThoughtTagsSearchHasExactMatchResult = useSelector(doesThoughtTagsSearchHasExactMatchResultSelector);
  const thoughtTagsSearchText = useSelector(thoughtTagsSearchTextSelector);

  const handleCreateTagButtonPress = () => dispatch(tagCreateButtonThunk());

  if (doesThoughtTagsSearchHasExactMatchResult) return null;
  if (!thoughtTagsSearchText) return null;

  return (
    <NoExactMatchSearchResult
      searchText={thoughtTagsSearchText}
      onCreateTagButtonPress={handleCreateTagButtonPress}
    />
  );
};

export default NoExactMatchSearchResultContainer;

