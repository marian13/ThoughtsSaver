import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditThoughtTextIntegrationArea from '@pages/HomePage/components/EditThoughtTextIntegrationArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import {
  thoughtInEditDraftTextSelector,
  thoughtInEditTextSelector,

  changeThoughtInEditDraftText
} from '@pages/HomePage/slice';

import cancelEditThoughtTextThunk from '@pages/HomePage/thunks/cancelEditThoughtTextThunk';
import finishEditThoughtTextThunk from '@pages/HomePage/thunks/finishEditThoughtTextThunk';

const EditThoughtTextIntegrationAreaContainer = () => {
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
    <EditThoughtTextIntegrationArea
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

export default EditThoughtTextIntegrationAreaContainer;
