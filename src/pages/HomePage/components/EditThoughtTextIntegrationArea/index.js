import React from 'react';
import { StyleSheet, View } from 'react-native';

import InteractionArea from '@components/InteractionArea';

import Text from '@components/Text';

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
  text: {
    position: 'absolute',
    top: 3,
    left: 0
  }
});

const renderContent = ({ thoughtInEditText }) => {
  // WARNING fragile code #1
  // HACK
  // Fixed Text inside ScrollView.
  // ThoughtTagsSearchSection Content uses the same hack.
  // As a result, if some styles are changed here, the same changes must be reflected there.
  return (
    <View style={styles.outerView}>
      <Text bold style={styles.text}>
        Edit Thought
      </Text>

      <View style={styles.innerView}>
        <Text reduced>
          {thoughtInEditText}
        </Text>
      </View>
    </View>
  );
};

const EditThoughtTextInteractionArea = ({
  isEditThoughtTextInputFocused,
  thoughtInEditDraftText,
  thoughtInEditText,
  onEditThoughtTextInputChange,
  onEditThoughtTextInputFocus,
  onEditThoughtTextInputBlur,
  onCancelEditThoughtTextModeButtonPress,
  onFinishEditThoughtTextModeButtonPress
}) => (
  <InteractionArea
    isTopVisible={true}
    isInputFocused={isEditThoughtTextInputFocused}
    inputText={thoughtInEditDraftText}
    leftTopButtonIconName="edit"
    rightTopButtonIconName="close"
    leftBottomButtonIconName="emoticon-outline"
    leftBottomButtonIconType="material-community"
    rightBottomButtonIconName="check-circle"
    onInputTextChange={onEditThoughtTextInputChange}
    onInputFocus={onEditThoughtTextInputFocus}
    onInputBlur={onEditThoughtTextInputBlur}
    onRightTopButtonPress={onCancelEditThoughtTextModeButtonPress}
    onRightBottomButtonPress={onFinishEditThoughtTextModeButtonPress}
    renderContent={() => renderContent({ thoughtInEditText })}
    style={styles.interactionArea}
  />
);

export default EditThoughtTextInteractionArea;
