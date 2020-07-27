import React from 'react';
import { StyleSheet, View } from 'react-native';

import InteractionArea from '@components/InteractionArea';

import BoldText from '@components/BoldText';
import ReducedText from '@components/ReducedText';

const styles = StyleSheet.create({
  interactionArea: {
    justifyContent: 'flex-end'
  },
  outerView: {
    justifyContent: 'center',
    height: 45
  },
  innerView: {
    flex: 1,
    paddingBottom: 5,
    justifyContent: 'flex-end'
  },
  boldText: {
    fontSize: 14,
    position: 'absolute',
    top: 3,
    left: 0
  }
});

const renderContent = ({ isThougthTextEditMode, thoughtInEditText }) => {
  if (!isThougthTextEditMode) return null;

  // WARNING fragile code #1
  // HACK
  // Fixed BoldText inside ScrollView.
  // ThoughtTagsSearchSection Content uses the same hack.
  // As a result, if some styles are changed here, the same changes must be reflected there.

  return (
    <View style={styles.outerView}>
      <BoldText style={styles.boldText}>
        Edit Thought
      </BoldText>

      <View style={styles.innerView}>
        <ReducedText style={styles.text}>
          {thoughtInEditText}
        </ReducedText>
      </View>
    </View>
  );
};

const ThoughtTextInputSection = ({
  isThoughtTextInputFocused,
  isThougthTextEditMode,
  thoughtDraftText,
  thoughtInEditText,
  onThoughtTextInputFocus,
  onThoughtTextInputBlur,
  onThoughtTextInputChange,
  onThoughtCreateButtonPress,
  onFinishThoughtTextEditModeButtonPress,
  onCancelThoughtTextEditModeButtonPress
}) => (
  <InteractionArea
    isTopVisible={isThougthTextEditMode}
    isInputFocused={isThoughtTextInputFocused}
    inputText={thoughtDraftText}
    inputPlaceholder="Save a new thought..."
    leftTopButtonIconName="edit"
    rightTopButtonIconName="close"
    leftBottomButtonIconName="emoticon-outline"
    leftBottomButtonIconType="material-community"
    rightBottomButtonIconName={isThougthTextEditMode ? 'check-circle' : 'send'}
    onInputFocus={onThoughtTextInputFocus}
    onInputBlur={onThoughtTextInputBlur}
    onInputTextChange={onThoughtTextInputChange}
    onRightTopButtonPress={onCancelThoughtTextEditModeButtonPress}
    onRightBottomButtonPress={isThougthTextEditMode ? onFinishThoughtTextEditModeButtonPress : onThoughtCreateButtonPress}
    renderContent={() => renderContent({ isThougthTextEditMode, thoughtInEditText })}
    style={styles.interactionArea}
  />
);

export default ThoughtTextInputSection;
