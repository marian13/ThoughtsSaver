import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtTagsInteractionArea from '@modals/AddThoughtTagsModal/components/SearchThoughtTagsInteractionArea';

import { searchThoughtTagsInputTextSelector, thoughtInEditDraftTagsSelector } from '@modals/AddThoughtTagsModal/slice';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';

import changeThoughtTagsSearchThunk from '@modals/AddThoughtTagsModal/thunks/changeThoughtTagsSearchThunk';

import cancelEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/cancelEditThoughtTagsThunk';
import finishEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/finishEditThoughtTagsThunk';

const SearchThoughtTagsInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isThoughtTagsSearchFocused = useSelector(isFocusedSelector('searchThoughtTagsInput'));

  const searchThoughtTagsInputText = useSelector(searchThoughtTagsInputTextSelector);
  const thoughtInEditDraftTags = useSelector(thoughtInEditDraftTagsSelector);

  const handleThoughtTagsSearchFocus = () => dispatch(focus('searchThoughtTagsInput'));
  const handleThoughtTagsSearchBlur = () => dispatch(blur('searchThoughtTagsInput'));

  const handleThoughtTagsSearchChange = text => dispatch(changeThoughtTagsSearchThunk({ text }));

  const handleCancelEditThoughtTagsButtonPress = () => dispatch(cancelEditThoughtTagsThunk());
  const handleFinishEditThoughtTagsButtonPress = () => dispatch(finishEditThoughtTagsThunk());

  return (
    <SearchThoughtTagsInteractionArea
      isThoughtTagsSearchFocused={isThoughtTagsSearchFocused}
      thoughtInEditDraftTags={thoughtInEditDraftTags}
      searchThoughtTagsInputText={searchThoughtTagsInputText}
      onThoughtTagsSearchChange={handleThoughtTagsSearchChange}
      onThoughtTagsSearchFocus={handleThoughtTagsSearchFocus}
      onThoughtTagsSearchBlur={handleThoughtTagsSearchBlur}
      onCancelEditThoughtTagsButtonPress={handleCancelEditThoughtTagsButtonPress}
      onFinishEditThoughtTagsButtonPress={handleFinishEditThoughtTagsButtonPress}
    />
  );
};

export default SearchThoughtTagsInteractionAreaContainer;
