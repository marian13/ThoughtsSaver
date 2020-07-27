import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchResult from '@modals/AddThoughtTagsModal/components/SearchResultsSection/SearchResultList/SearchResult';

import {
  doesThoughtDraftHasTagSelector
} from '@modals/AddThoughtTagsModal/slice';

import thoughtDraftTagsChangeThunk from '@modals/AddThoughtTagsModal/thunks/thoughtDraftTagsChangeThunk';

const SearchResultContainer = ({ searchResult, ...rest }) => {
  const dispatch = useDispatch();

  const doesThoughtDraftHasTag = useSelector(doesThoughtDraftHasTagSelector({ tag: searchResult }));

  const handleThoughtDraftTagsChange = () => dispatch(thoughtDraftTagsChangeThunk({
    selected: !doesThoughtDraftHasTag,
    tag: searchResult
  }));

  return (
    <SearchResult
      selected={doesThoughtDraftHasTag}
      tag={searchResult}
      onThoughtDraftTagsChange={handleThoughtDraftTagsChange}
    />
  );
};

export default SearchResultContainer;

