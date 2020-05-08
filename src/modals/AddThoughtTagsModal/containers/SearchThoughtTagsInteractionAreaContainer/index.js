import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchThoughtTagsInteractionArea from '@modals/AddThoughtTagsModal/components/SearchThoughtTagsInteractionArea';

import { thoughtTagsSearchTextSelector, thoughtInEditDraftTagsSelector } from '@modals/AddThoughtTagsModal/slice';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';

import changeThoughtTagsSearchThunk from '@modals/AddThoughtTagsModal/thunks/changeThoughtTagsSearchThunk';

import cancelEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/cancelEditThoughtTagsThunk';
import finishEditThoughtTagsThunk from '@modals/AddThoughtTagsModal/thunks/finishEditThoughtTagsThunk';

const SearchThoughtTagsInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isThoughtTagsSearchFocused = useSelector(isFocusedSelector('thoughtTagsSearch'));

  const thoughtTagsSearchText = useSelector(thoughtTagsSearchTextSelector);
  const thoughtInEditDraftTags = useSelector(thoughtInEditDraftTagsSelector);

  const handleThoughtTagsSearchFocus = () => dispatch(focus('thoughtTagsSearch'));
  const handleThoughtTagsSearchBlur = () => dispatch(blur('thoughtTagsSearch'));

  const handleThoughtTagsSearchChange = text => dispatch(changeThoughtTagsSearchThunk({ text }));

  const handleCancelEditThoughtTagsButtonPress = () => dispatch(cancelEditThoughtTagsThunk());
  const handleFinishEditThoughtTagsButtonPress = () => dispatch(finishEditThoughtTagsThunk());

  return (
    <SearchThoughtTagsInteractionArea
      isThoughtTagsSearchFocused={isThoughtTagsSearchFocused}
      thoughtInEditDraftTags={thoughtInEditDraftTags}
      thoughtTagsSearchText={thoughtTagsSearchText}
      onThoughtTagsSearchChange={handleThoughtTagsSearchChange}
      onThoughtTagsSearchFocus={handleThoughtTagsSearchFocus}
      onThoughtTagsSearchBlur={handleThoughtTagsSearchBlur}
      onCancelEditThoughtTagsButtonPress={handleCancelEditThoughtTagsButtonPress}
      onFinishEditThoughtTagsButtonPress={handleFinishEditThoughtTagsButtonPress}
    />
  );
};

export default SearchThoughtTagsInteractionAreaContainer;
