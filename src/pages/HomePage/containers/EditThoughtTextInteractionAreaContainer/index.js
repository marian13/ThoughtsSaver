import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditThoughtTextInteractionArea from '@pages/HomePage/components/EditThoughtTextInteractionArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import {
  thoughtInEditDraftTextSelector,
  thoughtInEditTextSelector,

  changeThoughtInEditDraftText
} from '@pages/HomePage/slice';

import cancelEditThoughtTextThunk from '@pages/HomePage/thunks/cancelEditThoughtTextThunk';
import finishEditThoughtTextThunk from '@pages/HomePage/thunks/finishEditThoughtTextThunk';

const EditThoughtTextInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isEditThoughtTextInputFocused = useSelector(isFocusedSelector('editThoughtTextInput'));
  const thoughtInEditDraftText = useSelector(thoughtInEditDraftTextSelector);
  const thoughtInEditText = useSelector(thoughtInEditTextSelector);

  const handleEditThoughtTextInputChange = text => dispatch(changeThoughtInEditDraftText({ text }));
  const handleEditThoughtTextInputFocus = () => dispatch(focus('editThoughtTextInput'));
  const handleEditThoughtTextInputBlur = () => dispatch(blur('editThoughtTextInput'));

  const handleCancelEditThoughtTextModeButtonPress = () => dispatch(cancelEditThoughtTextThunk());
  const handleFinishEditThoughtTextModeButtonPress = () => dispatch(finishEditThoughtTextThunk());

  return (
    <EditThoughtTextInteractionArea
      isEditThoughtTextInputFocused={isEditThoughtTextInputFocused}
      thoughtInEditDraftText={thoughtInEditDraftText}
      thoughtInEditText={thoughtInEditText}
      onEditThoughtTextInputChange={handleEditThoughtTextInputChange}
      onEditThoughtTextInputFocus={handleEditThoughtTextInputFocus}
      onEditThoughtTextInputBlur={handleEditThoughtTextInputBlur}
      onCancelEditThoughtTextModeButtonPress={handleCancelEditThoughtTextModeButtonPress}
      onFinishEditThoughtTextModeButtonPress={handleFinishEditThoughtTextModeButtonPress}
    />
  );
};

export default EditThoughtTextInteractionAreaContainer;
