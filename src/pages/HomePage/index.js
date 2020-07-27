import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSection from './components/HeaderSection';
import ThoughtStreamSection from './components/ThoughtStreamSection';
import ThoughtTextInputSection from './components/ThoughtTextInputSection';

import ThoughtContainer from './containers/ThoughtContainer';
import ThoughtMenuOptionsContainer from './containers/ThoughtMenuOptionsContainer';

import AddThoughtTagsModal from '@modals/AddThoughtTagsModal';

import {
  thoughtsSelector,
} from '@modules/ThoughtsModule/slice';

import {
  isThoughtTextInputFocusedSelector,
  isThougthTextEditModeSelector,

  thoughtDraftTextSelector,
  thoughtInEditTextSelector,

  focusThoughtTextInput,
  blurThoughtTextInput,

  changeThoughtDraftText,

  cancelThoughtTextEditMode
} from '@pages/HomePage/slice';

import {
  isVisibleSelector as isAddThoughtTagsModalVisibleSelector
} from '@modals/AddThoughtTagsModal/slice';

import thoughtCreateButtonPressThunk from './thunks/thoughtCreateButtonPressThunk';
import finishThoughtTextEditModeButtonPressThunk from './thunks/finishThoughtTextEditModeButtonPressThunk';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%'
  }
});

const HomePage = () => {
  const dispatch = useDispatch();

  // ThoughtsModule
  const thoughts = useSelector(thoughtsSelector);

  // HomePage
  const isThoughtTextInputFocused = useSelector(isThoughtTextInputFocusedSelector);
  const isThougthTextEditMode = useSelector(isThougthTextEditModeSelector);

  const thoughtDraftText = useSelector(thoughtDraftTextSelector);
  const thoughtInEditText = useSelector(thoughtInEditTextSelector);

  const handleThoughtTextInputChange = text => dispatch(changeThoughtDraftText({ text }));

  const handleThoughtTextInputFocus = () => dispatch(focusThoughtTextInput());
  const handleThoughtTextInputBlur = () => dispatch(blurThoughtTextInput());

  const handleCancelThoughtTextEditModeButtonPress = () => dispatch(cancelThoughtTextEditMode());

  // AddThoughtTagsModal
  const isAddThoughtTagsModalVisible = useSelector(isAddThoughtTagsModalVisibleSelector);

  // Thunks
  const handleThoughtCreateButtonPress = () => dispatch(thoughtCreateButtonPressThunk());
  const handleFinishThoughtTextEditModeButtonPress = () => dispatch(finishThoughtTextEditModeButtonPressThunk());

  return (
    <View style={styles.view}>
      <HeaderSection />

      <ThoughtStreamSection
        thoughts={thoughts}
        ThoughtContainer={ThoughtContainer}
        ThoughtMenuOptionsContainer={ThoughtMenuOptionsContainer}
      />

      <ThoughtTextInputSection
        isThoughtTextInputFocused={isThoughtTextInputFocused}
        isThougthTextEditMode={isThougthTextEditMode}
        thoughtDraftText={thoughtDraftText}
        thoughtInEditText={thoughtInEditText}
        onThoughtTextInputChange={handleThoughtTextInputChange}
        onThoughtTextInputFocus={handleThoughtTextInputFocus}
        onThoughtTextInputBlur={handleThoughtTextInputBlur}
        onThoughtCreateButtonPress={handleThoughtCreateButtonPress}
        onFinishThoughtTextEditModeButtonPress={handleFinishThoughtTextEditModeButtonPress}
        onCancelThoughtTextEditModeButtonPress={handleCancelThoughtTextEditModeButtonPress}
      />

      <AddThoughtTagsModal isVisible={isAddThoughtTagsModalVisible} />
    </View>
  );
};

export default HomePage;
