import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtTagsInteractionArea from '@modals/AddThoughtTagsModal/components/SearchThoughtTagsInteractionArea';

import { searchThoughtTagsInputTextSelector, thoughtInEditDraftTagsSelector } from '@modals/AddThoughtTagsModal/slice';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';

import changeSearchThoughtTagsInputThunk from '@modals/AddThoughtTagsModal/thunks/changeSearchThoughtTagsInputThunk';

import cancelEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/cancelEditThoughtTagsThunk';
import finishEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/finishEditThoughtTagsThunk';

const SearchThoughtTagsInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isSearchThoughtTagsInputFocused = useSelector(isFocusedSelector('searchThoughtTagsInput'));

  const searchThoughtTagsInputText = useSelector(searchThoughtTagsInputTextSelector);
  const thoughtInEditDraftTags = useSelector(thoughtInEditDraftTagsSelector);

  const handleSearchThoughtTagsInputFocus = () => dispatch(focus('searchThoughtTagsInput'));
  const handleSearchThoughtTagsInputBlur = () => dispatch(blur('searchThoughtTagsInput'));

  const handleSearchThoughtTagsInputChange = text => dispatch(changeSearchThoughtTagsInputThunk({ text }));

  const handleCancelEditThoughtTagsButtonPress = () => dispatch(cancelEditThoughtTagsThunk());
  const handleFinishEditThoughtTagsButtonPress = () => dispatch(finishEditThoughtTagsThunk());

  return (
    <SearchThoughtTagsInteractionArea
      isSearchThoughtTagsInputFocused={isSearchThoughtTagsInputFocused}
      thoughtInEditDraftTags={thoughtInEditDraftTags}
      searchThoughtTagsInputText={searchThoughtTagsInputText}
      onSearchThoughtTagsInputChange={handleSearchThoughtTagsInputChange}
      onSearchThoughtTagsInputFocus={handleSearchThoughtTagsInputFocus}
      onSearchThoughtTagsInputBlur={handleSearchThoughtTagsInputBlur}
      onCancelEditThoughtTagsButtonPress={handleCancelEditThoughtTagsButtonPress}
      onFinishEditThoughtTagsButtonPress={handleFinishEditThoughtTagsButtonPress}
    />
  );
};

export default SearchThoughtTagsInteractionAreaContainer;
