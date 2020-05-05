import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionArea from '@components/InteractionArea';

const styles = StyleSheet.create({
  interactionArea: {
    justifyContent: 'flex-end'
  }
});

const CreateThoughtInteractionArea = ({
  isCreateThoughtTextInputFocused,
  thoughtInCreateDraftText,
  onCreateThoughtTextInputChange,
  onCreateThoughtTextInputFocus,
  onCreateThoughtTextInputBlur,
  onCreateThoughtButtonPress,
}) => (
  <InteractionArea
    isTopVisible={false}
    isInputFocused={isCreateThoughtTextInputFocused}
    inputText={thoughtInCreateDraftText}
    inputPlaceholder="Save a new thought..."
    leftBottomButtonIconName="emoticon-outline"
    leftBottomButtonIconType="material-community"
    rightBottomButtonIconName="send"
    onInputTextChange={onCreateThoughtTextInputChange}
    onInputFocus={onCreateThoughtTextInputFocus}
    onInputBlur={onCreateThoughtTextInputBlur}
    onRightBottomButtonPress={onCreateThoughtButtonPress}
    style={styles.interactionArea}
  />
);

export default CreateThoughtInteractionArea;
