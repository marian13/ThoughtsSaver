import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateThoughtInteractionArea from '@pages/HomePage/components/CreateThoughtInteractionArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

import { thoughtInCreateDraftTextSelector, changeThoughtInCreateDraftText } from '@pages/HomePage/slice';

import createThoughtThunk from '@pages/HomePage/thunks/createThoughtThunk';

import { CREATE_THOUGHT_TEXT_INPUT, GENERAL_THOUGHT_OPTIONS_MENU } from '@pages/HomePage/constants/identifiers';

const CreateThoughtInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isCreateThoughtTextInputFocused = useSelector(isFocusedSelector(CREATE_THOUGHT_TEXT_INPUT));
  const isGeneralThoughtOptionsMenuVisible = useSelector(isVisibleSelector(GENERAL_THOUGHT_OPTIONS_MENU));
  const thoughtInCreateDraftText = useSelector(thoughtInCreateDraftTextSelector);

  const handleCreateThoughtTextInputChange = text => dispatch(changeThoughtInCreateDraftText({ text }));
  const handleCreateThoughtTextInputFocus = () => dispatch(focus(CREATE_THOUGHT_TEXT_INPUT));
  const handleCreateThoughtTextInputBlur = () => dispatch(blur(CREATE_THOUGHT_TEXT_INPUT));

  const handleCreateThoughtButtonPress = () => dispatch(createThoughtThunk());

  const handleGeneralThoughtOptionsButtonPress = () => dispatch(show(GENERAL_THOUGHT_OPTIONS_MENU));
  const handleGeneralThoughtOptionsMenuBackdropPress = () => dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));

  return (
    <CreateThoughtInteractionArea
      isCreateThoughtTextInputFocused={isCreateThoughtTextInputFocused}
      isGeneralThoughtOptionsMenuVisible={isGeneralThoughtOptionsMenuVisible}
      thoughtInCreateDraftText={thoughtInCreateDraftText}
      onCreateThoughtTextInputChange={handleCreateThoughtTextInputChange}
      onCreateThoughtTextInputFocus={handleCreateThoughtTextInputFocus}
      onCreateThoughtTextInputBlur={handleCreateThoughtTextInputBlur}
      onCreateThoughtButtonPress={handleCreateThoughtButtonPress}
      onGeneralThoughtOptionsButtonPress={handleGeneralThoughtOptionsButtonPress}
      onGeneralThoughtOptionsMenuBackdropPress={handleGeneralThoughtOptionsMenuBackdropPress}
    />
  );
};

export default CreateThoughtInteractionAreaContainer;
