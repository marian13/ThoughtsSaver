import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditThoughtTextInteractionArea from '@pages/HomePage/components/EditThoughtTextInteractionArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';
import {
  thoughtInEditDraftTextSelector,
  thoughtInEditTextSelector,

  changeThoughtInEditDraftText,
  appendEmojiToThoughtInEditDraftText
} from '@pages/HomePage/slice';

import cancelEditThoughtTextThunk from '@pages/HomePage/thunks/cancelEditThoughtTextThunk';
import finishEditThoughtTextThunk from '@pages/HomePage/thunks/finishEditThoughtTextThunk';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const EditThoughtTextInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isEditThoughtTextInputFocused = useSelector(isFocusedSelector('editThoughtTextInput'));
  const isEmojiPickerCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const thoughtInEditDraftText = useSelector(thoughtInEditDraftTextSelector);
  const thoughtInEditText = useSelector(thoughtInEditTextSelector);

  const handleEditThoughtTextInputChange = text => dispatch(changeThoughtInEditDraftText({ text }));
  const handleEditThoughtTextInputFocus = () => dispatch(focus('editThoughtTextInput'));
  const handleEditThoughtTextInputBlur = () => dispatch(blur('editThoughtTextInput'));

  const handleCancelEditThoughtTextModeButtonPress = () => dispatch(cancelEditThoughtTextThunk());
  const handleFinishEditThoughtTextModeButtonPress = () => dispatch(finishEditThoughtTextThunk());

  const handleShowEmojiPickerCollapseButtonPress = () => dispatch(show(EMOJI_PICKER_COLLAPSE));
  const handleHideEmojiPickerCollapseButtonPress = () => dispatch(hide(EMOJI_PICKER_COLLAPSE));

  const handleEmojiPick = emoji => dispatch(appendEmojiToThoughtInEditDraftText({ emoji }));

  return (
    <EditThoughtTextInteractionArea
      isEditThoughtTextInputFocused={isEditThoughtTextInputFocused}
      isEmojiPickerCollapseVisible={isEmojiPickerCollapseVisible}
      thoughtInEditDraftText={thoughtInEditDraftText}
      thoughtInEditText={thoughtInEditText}
      onEditThoughtTextInputChange={handleEditThoughtTextInputChange}
      onEditThoughtTextInputFocus={handleEditThoughtTextInputFocus}
      onEditThoughtTextInputBlur={handleEditThoughtTextInputBlur}
      onCancelEditThoughtTextModeButtonPress={handleCancelEditThoughtTextModeButtonPress}
      onFinishEditThoughtTextModeButtonPress={handleFinishEditThoughtTextModeButtonPress}
      onShowEmojiPickerCollapseButtonPress={handleShowEmojiPickerCollapseButtonPress}
      onHideEmojiPickerCollapseButtonPress={handleHideEmojiPickerCollapseButtonPress}
      onEmojiPick={handleEmojiPick}
    />
  );
};

export default EditThoughtTextInteractionAreaContainer;
