import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtInteractionArea from '@pages/HomePage/components/SearchThoughtInteractionArea';

import { searchThoughtInputTextSelector, searchThoughtResultsSelector } from '@pages/HomePage/slice';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';

import changeSearchThoughtInputThunk from '@pages/HomePage/thunks/changeSearchThoughtInputThunk';

import cancelSearchThoughtThunk from '@pages/HomePage/thunks/cancelSearchThoughtThunk';
import finishSearchThoughtThunk from '@pages/HomePage/thunks/finishSearchThoughtThunk';

import { SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

const SearchThoughtInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isSearchThoughtInputFocused = useSelector(isFocusedSelector(SEARCH_THOUGHT_INPUT));

  const searchThoughtInputText = useSelector(searchThoughtInputTextSelector);
  const searchThoughtResults = useSelector(searchThoughtResultsSelector);

  const handleSearchThoughInputFocus = () => dispatch(focus(SEARCH_THOUGHT_INPUT));
  const handleSearchThoughInputBlur = () => dispatch(blur(SEARCH_THOUGHT_INPUT));

  const handleSearchThoughInputChange = text => dispatch(changeSearchThoughtInputThunk({ text }));

  const handleCancelSearchThoughtButtonPress = () => dispatch(cancelSearchThoughtThunk());
  const handleFinishSearchThoughtButtonPress = () => dispatch(finishSearchThoughtThunk());

  return (
    <SearchThoughtInteractionArea
      isSearchThoughtInputFocused={isSearchThoughtInputFocused}
      searchThoughtInputText={searchThoughtInputText}
      searchThoughtResults={searchThoughtResults}
      onSearchThoughtInputChange={handleSearchThoughInputChange}
      onSearchThoughtInputFocus={handleSearchThoughInputFocus}
      onSearchThoughtInputBlur={handleSearchThoughInputBlur}
      onCancelSearchThoughtButtonPress={handleCancelSearchThoughtButtonPress}
      onFinishSearchThoughtButtonPress={handleFinishSearchThoughtButtonPress}
    />
  );
};

export default SearchThoughtInteractionAreaContainer;
