import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchResult from '@modals/AddThoughtTagsModal/components/SearchResults/SearchResult';

import { doesThoughtInEditDraftHasTagSelector } from '@modals/AddThoughtTagsModal/slice';

import changeThoughtInEditDraftTagsThunk from '@modals/AddThoughtTagsModal/thunks/changeThoughtInEditDraftTagsThunk';

const SearchResultContainer = ({ searchResult }) => {
  const dispatch = useDispatch();

  const doesThoughtDraftHasTag = useSelector(doesThoughtInEditDraftHasTagSelector({ tag: searchResult }));

  const handleThoughtDraftTagsChange = () => dispatch(changeThoughtInEditDraftTagsThunk({
    selected: !doesThoughtDraftHasTag,
    tag: searchResult
  }));

  return (
    <SearchResult
      selected={doesThoughtDraftHasTag}
      tag={searchResult}
      onChangeThoughtInEditDraftTags={handleThoughtDraftTagsChange}
    />
  );
};

export default SearchResultContainer;

