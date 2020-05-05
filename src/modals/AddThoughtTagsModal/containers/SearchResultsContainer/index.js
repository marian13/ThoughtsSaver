import React from 'react';
import { useSelector } from 'react-redux';

import SearchResults from '@modals/AddThoughtTagsModal/components/SearchResults';

import SearchResultContainer from '@modals/AddThoughtTagsModal/containers/SearchResultContainer';
import NoExactMatchSearchResultContainer from '@modals/AddThoughtTagsModal/containers/NoExactMatchSearchResultContainer';

import { thoughtTagsSearchResultsSelector } from '@modals/AddThoughtTagsModal/slice';

const SearchResultsContainer = () => {
  const thoughtTagsSearchResults = useSelector(thoughtTagsSearchResultsSelector);

  return (
    <SearchResults
      searchResults={thoughtTagsSearchResults}
      SearchResultContainer={SearchResultContainer}
      NoExactMatchSearchResultContainer={NoExactMatchSearchResultContainer}
    />
  );
};

export default SearchResultsContainer;
