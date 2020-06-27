import { thoughtsSelector } from '~/modules/ThoughtsModule/slice';

import {
  isSearchThoughtByTextOptionSelectedSelector,
  isSearchThoughtByTagOptionSelectedSelector,
  isSearchThoughtFuzzyOptionSelectedSelector,

  changeSearchThoughtText,
  changeSearchThoughtResults
} from '~/pages/HomePage/slice';

import { any, filter, compact } from '~/utils/arrays';
import { fuzzySearch } from '~/utils/strings';

const createSearchFunction = isFuzzySelected => {
  if (isFuzzySelected) {
    return (text, textToSearch) => fuzzySearch(text, textToSearch);
  } else {
    return (text, textToSearch) => text.includes(textToSearch);
  }
};

const createCombinedFilterFunction = (isByTextSelected, isByTagSelected, searchText, searchFunction) => {
  const filterFunctions = compact([
    isByTextSelected && (thought => searchFunction(thought.text, searchText)),
    isByTagSelected && (thought => any(thought.tags, tag => searchFunction(tag.text, searchText)))
  ]);

  return thought => any(filterFunctions, filterFunction => filterFunction(thought) === true);
};

const changeSearchThoughtTextThunk = ({ text: textToSearch }) => (dispatch, getState) => {
  const thoughts = thoughtsSelector(getState());
  const searchText = textToSearch.trim();

  dispatch(changeSearchThoughtText({ text: searchText }));

  if (!searchText) return dispatch(changeSearchThoughtResults({ results: thoughts }));;

  const isSearchThoughtByTextOptionSelected = isSearchThoughtByTextOptionSelectedSelector(getState());
  const isSearchThoughtByTagOptionSelected = isSearchThoughtByTagOptionSelectedSelector(getState());
  const isSearchThoughtFuzzyOptionSelected = isSearchThoughtFuzzyOptionSelectedSelector(getState());

  const searchFunction = createSearchFunction(isSearchThoughtFuzzyOptionSelected);

  const filterFunction = createCombinedFilterFunction(
    isSearchThoughtByTextOptionSelected,
    isSearchThoughtByTagOptionSelected,
    searchText,
    searchFunction
  );

  const results = filter(thoughts, filterFunction);

  dispatch(changeSearchThoughtResults({ results }));
};

export default changeSearchThoughtTextThunk;
