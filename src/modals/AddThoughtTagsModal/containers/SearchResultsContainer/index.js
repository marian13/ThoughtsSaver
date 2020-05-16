import React from 'react';
import { useSelector } from 'react-redux';

import SearchResults from '@modals/AddThoughtTagsModal/components/SearchResults';

import SearchResultContainer from '@modals/AddThoughtTagsModal/containers/SearchResultContainer';
import NoExactMatchSearchResultContainer from '@modals/AddThoughtTagsModal/containers/NoExactMatchSearchResultContainer';

import { searchThoughtTagsInputResultsSelector } from '@modals/AddThoughtTagsModal/slice';

const SearchResultsContainer = () => {
  const searchThoughtTagsInputResults = useSelector(searchThoughtTagsInputResultsSelector);

  return (
    <SearchResults
      searchResults={searchThoughtTagsInputResults}
      SearchResultContainer={SearchResultContainer}
      NoExactMatchSearchResultContainer={NoExactMatchSearchResultContainer}
    />
  );
};

export default SearchResultsContainer;
