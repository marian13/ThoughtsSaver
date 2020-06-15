import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateThoughtInteractionArea from '@pages/HomePage/components/CreateThoughtInteractionArea';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { isVisibleSelector, show, hide } from '@modules/VisibilitiesModule/slice';

import {
  thoughtInCreateDraftTextSelector,

  changeThoughtInCreateDraftText,
  appendEmojiToThoughtInCreateDraftText
} from '@pages/HomePage/slice';

import createThoughtThunk from '@pages/HomePage/thunks/createThoughtThunk';

import {
  CREATE_THOUGHT_TEXT_INPUT,
  GENERAL_THOUGHT_OPTIONS_MENU,
  EMOJI_PICKER_COLLAPSE
} from '@pages/HomePage/constants/identifiers';

import GeneralThoughtMenuOptionsContainer from '@pages/HomePage/containers/GeneralThoughtMenuOptionsContainer';

const CreateThoughtInteractionAreaContainer = () => {
  const dispatch = useDispatch();

  const isCreateThoughtTextInputFocused = useSelector(isFocusedSelector(CREATE_THOUGHT_TEXT_INPUT));
  const isGeneralThoughtOptionsMenuVisible = useSelector(isVisibleSelector(GENERAL_THOUGHT_OPTIONS_MENU));
  const isEmojiPickerCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const thoughtInCreateDraftText = useSelector(thoughtInCreateDraftTextSelector);

  const handleCreateThoughtTextInputChange = text => dispatch(changeThoughtInCreateDraftText({ text }));
  const handleCreateThoughtTextInputFocus = () => dispatch(focus(CREATE_THOUGHT_TEXT_INPUT));
  const handleCreateThoughtTextInputBlur = () => dispatch(blur(CREATE_THOUGHT_TEXT_INPUT));

  const handleCreateThoughtButtonPress = () => dispatch(createThoughtThunk());

  const handleGeneralThoughtOptionsButtonPress = () => dispatch(show(GENERAL_THOUGHT_OPTIONS_MENU));
  const handleGeneralThoughtOptionsMenuBackdropPress = () => dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));

  const handleShowEmojiPickerCollapseButtonPress = () => dispatch(show(EMOJI_PICKER_COLLAPSE));
  const handleHideEmojiPickerCollapseButtonPress = () => dispatch(hide(EMOJI_PICKER_COLLAPSE));

  const handleEmojiPick = emoji => dispatch(appendEmojiToThoughtInCreateDraftText({ emoji }));

  return (
    <CreateThoughtInteractionArea
      isCreateThoughtTextInputFocused={isCreateThoughtTextInputFocused}
      isGeneralThoughtOptionsMenuVisible={isGeneralThoughtOptionsMenuVisible}
      isEmojiPickerCollapseVisible={isEmojiPickerCollapseVisible}
      thoughtInCreateDraftText={thoughtInCreateDraftText}
      onCreateThoughtTextInputChange={handleCreateThoughtTextInputChange}
      onCreateThoughtTextInputFocus={handleCreateThoughtTextInputFocus}
      onCreateThoughtTextInputBlur={handleCreateThoughtTextInputBlur}
      onCreateThoughtButtonPress={handleCreateThoughtButtonPress}
      onGeneralThoughtOptionsButtonPress={handleGeneralThoughtOptionsButtonPress}
      onGeneralThoughtOptionsMenuBackdropPress={handleGeneralThoughtOptionsMenuBackdropPress}
      onShowEmojiPickerCollapseButtonPress={handleShowEmojiPickerCollapseButtonPress}
      onHideEmojiPickerCollapseButtonPress={handleHideEmojiPickerCollapseButtonPress}
      onEmojiPick={handleEmojiPick}
      GeneralThoughtMenuOptionsContainer={GeneralThoughtMenuOptionsContainer}
    />
  );
};

export default CreateThoughtInteractionAreaContainer;
