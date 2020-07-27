import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoExactMatchSearchResult from '@modals/AddThoughtTagsModal/components/SearchResultsSection/SearchResultList/NoExactMatchSearchResult';

import {
  doesThoughtTagsSearchHasExactMatchResultSelector,
  thoughtTagsSearchTextSelector
} from '@modals/AddThoughtTagsModal/slice';

import tagCreateButtonPressThunk from '@modals/AddThoughtTagsModal/thunks/tagCreateButtonPressThunk';

const NoExactMatchSearchResultContainer = () => {
  const dispatch = useDispatch();

  const doesThoughtTagsSearchHasExactMatchResult = useSelector(doesThoughtTagsSearchHasExactMatchResultSelector);
  const thoughtTagsSearchText = useSelector(thoughtTagsSearchTextSelector);

  const handleCreateTagButtonPress = () => dispatch(tagCreateButtonPressThunk());

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

