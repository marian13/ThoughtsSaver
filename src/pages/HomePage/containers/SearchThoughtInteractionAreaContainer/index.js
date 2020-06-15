import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtInteractionArea from '@pages/HomePage/components/SearchThoughtInteractionArea';

import { searchThoughtInputTextSelector, searchThoughtResultsSelector } from '@pages/HomePage/slice';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

import changeSearchThoughtInputThunk from '@pages/HomePage/thunks/changeSearchThoughtInputThunk';
import appendEmojiToSearchThoughtInputThunk from '@pages/HomePage/thunks/appendEmojiToSearchThoughtInputThunk';

import cancelSearchThoughtThunk from '@pages/HomePage/thunks/cancelSearchThoughtThunk';
import finishSearchThoughtThunk from '@pages/HomePage/thunks/finishSearchThoughtThunk';

import SearchThoughtOptionsCollapseContainer from '@pages/HomePage/containers/SearchThoughtOptionsCollapseContainer';

import {
  SEARCH_THOUGHT_INPUT,
  SEARCH_THOUGHT_OPTIONS_COLLAPSE,
  EMOJI_PICKER_COLLAPSE
} from '@pages/HomePage/constants/identifiers';

const SearchThoughtInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isSearchThoughtInputFocused = useSelector(isFocusedSelector(SEARCH_THOUGHT_INPUT));
  const isSearchThoughtOptionsVisible = useSelector(isVisibleSelector(SEARCH_THOUGHT_OPTIONS_COLLAPSE))
  const isEmojiPickerCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const searchThoughtInputText = useSelector(searchThoughtInputTextSelector);
  const searchThoughtResults = useSelector(searchThoughtResultsSelector);

  const handleSearchThoughInputFocus = () => dispatch(focus(SEARCH_THOUGHT_INPUT));
  const handleSearchThoughInputBlur = () => dispatch(blur(SEARCH_THOUGHT_INPUT));

  const handleSearchThoughInputChange = text => dispatch(changeSearchThoughtInputThunk({ text }));

  const handleCancelSearchThoughtButtonPress = () => dispatch(cancelSearchThoughtThunk());
  const handleFinishSearchThoughtButtonPress = () => dispatch(finishSearchThoughtThunk());

  const handleShowSearchThoughtOptionsButtonPress = () => dispatch(show(SEARCH_THOUGHT_OPTIONS_COLLAPSE));
  const handleHideSearchThoughtOptionsButtonPress = () => dispatch(hide(SEARCH_THOUGHT_OPTIONS_COLLAPSE));

  const handleShowEmojiPickerCollapseButtonPress = () => dispatch(show(EMOJI_PICKER_COLLAPSE));
  const handleHideEmojiPickerCollapseButtonPress = () => dispatch(hide(EMOJI_PICKER_COLLAPSE));

  const handleEmojiPick = emoji => dispatch(appendEmojiToSearchThoughtInputThunk({ emoji }));

  return (
    <SearchThoughtInteractionArea
      isSearchThoughtInputFocused={isSearchThoughtInputFocused}
      isSearchThoughtOptionsVisible={isSearchThoughtOptionsVisible}
      isEmojiPickerCollapseVisible={isEmojiPickerCollapseVisible}
      searchThoughtInputText={searchThoughtInputText}
      searchThoughtResults={searchThoughtResults}
      onSearchThoughtInputChange={handleSearchThoughInputChange}
      onSearchThoughtInputFocus={handleSearchThoughInputFocus}
      onSearchThoughtInputBlur={handleSearchThoughInputBlur}
      onCancelSearchThoughtButtonPress={handleCancelSearchThoughtButtonPress}
      onFinishSearchThoughtButtonPress={handleFinishSearchThoughtButtonPress}
      onShowSearchThoughtOptionsButtonPress={handleShowSearchThoughtOptionsButtonPress}
      onHideSearchThoughtOptionsButtonPress={handleHideSearchThoughtOptionsButtonPress}
      onShowEmojiPickerCollapseButtonPress={handleShowEmojiPickerCollapseButtonPress}
      onHideEmojiPickerCollapseButtonPress={handleHideEmojiPickerCollapseButtonPress}
      onEmojiPick={handleEmojiPick}
      SearchThoughtOptionsCollapseContainer={SearchThoughtOptionsCollapseContainer}
    />
  );
};

export default SearchThoughtInteractionAreaContainer;
