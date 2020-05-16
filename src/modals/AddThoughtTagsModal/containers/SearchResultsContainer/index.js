import React from 'react';
import { useSelector } from 'react-redux';

import SearchResults from '@modals/AddThoughtTagsModal/components/SearchResults';

import SearchResultContainer from '@modals/AddThoughtTagsModal/containers/SearchResultContainer';
import NoExactMatchSearchResultContainer from '@modals/AddThoughtTagsModal/containers/NoExactMatchSearchResultContainer';

import { searchThoughtTagsResultsSelector } from '@modals/AddThoughtTagsModal/slice';

const SearchResultsContainer = () => {
  const searchThoughtTagsResults = useSelector(searchThoughtTagsResultsSelector);

  return (
    <SearchResults
      searchResults={searchThoughtTagsResults}
      SearchResultContainer={SearchResultContainer}
      NoExactMatchSearchResultContainer={NoExactMatchSearchResultContainer}
    />
  );
};

export default SearchResultsContainer;
