import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateThoughtInteractionArea from '@pages/HomePage/components/CreateThoughtInteractionArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { thoughtInCreateDraftTextSelector, changeThoughtInCreateDraftText } from '@pages/HomePage/slice';

import createThoughtThunk from '@pages/HomePage/thunks/createThoughtThunk';

const CreateThoughtInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isCreateThoughtTextInputFocused = useSelector(isFocusedSelector('createThoughtTextInput'));
  const thoughtInCreateDraftText = useSelector(thoughtInCreateDraftTextSelector);

  const handleCreateThoughtTextInputChange = text => dispatch(changeThoughtInCreateDraftText({ text }));
  const handleCreateThoughtTextInputFocus = () => dispatch(focus('createThoughtTextInput'));
  const handleCreateThoughtTextInputBlur = () => dispatch(blur('createThoughtTextInput'));

  const handleCreateThoughtButtonPress = () => dispatch(createThoughtThunk());

  return (
    <CreateThoughtInteractionArea
      isCreateThoughtTextInputFocused={isCreateThoughtTextInputFocused}
      thoughtInCreateDraftText={thoughtInCreateDraftText}
      onCreateThoughtTextInputChange={handleCreateThoughtTextInputChange}
      onCreateThoughtTextInputFocus={handleCreateThoughtTextInputFocus}
      onCreateThoughtTextInputBlur={handleCreateThoughtTextInputBlur}
      onCreateThoughtButtonPress={handleCreateThoughtButtonPress}
    />
  );
};

export default CreateThoughtInteractionAreaContainer;
