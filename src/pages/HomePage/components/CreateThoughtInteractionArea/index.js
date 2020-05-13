import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import OverlayMenu from '@components/OverlayMenu';
import TextInput from '@components/TextInput';
import View from '@components/View';

import {
  CREATE_THOUGHT_TEXT_INPUT,
  CREATE_THOUGHT_BUTTON,
  GENERAL_THOUGHT_OPTIONS_BUTTON
} from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  overlayMenuContainer: {
    paddingLeft: 10
  }
});

const CreateThoughtInteractionArea = ({
  isCreateThoughtTextInputFocused,
  isGeneralThoughtOptionsMenuVisible,
  thoughtInCreateDraftText,
  onCreateThoughtTextInputChange,
  onCreateThoughtTextInputFocus,
  onCreateThoughtTextInputBlur,
  onCreateThoughtButtonPress,
  onGeneralThoughtOptionsButtonPress,
  onGeneralThoughtOptionsMenuBackdropPress
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <OverlayMenu
        isVisible={isGeneralThoughtOptionsMenuVisible}
        onContentPress={onGeneralThoughtOptionsButtonPress}
        onBackdropPress={onGeneralThoughtOptionsMenuBackdropPress}
        renderContent={() => <IconButton testID={GENERAL_THOUGHT_OPTIONS_BUTTON} iconName="more-vert" />}
        height={100}
        containerStyle={styles.overlayMenuContainer}
      />
    </InteractionRow>

    <InteractionRow>
      <IconButton
        iconName="emoticon-outline"
        iconType="material-community"
      />

      <TextInput
        testID={CREATE_THOUGHT_TEXT_INPUT}
        isFocused={isCreateThoughtTextInputFocused}
        autoResise
        text={thoughtInCreateDraftText}
        placeholder="Save a new thought..."
        onFocus={onCreateThoughtTextInputFocus}
        onBlur={onCreateThoughtTextInputBlur}
        onTextChange={onCreateThoughtTextInputChange}
      />

      <IconButton
        testID={CREATE_THOUGHT_BUTTON}
        iconName="send"
        onPress={onCreateThoughtButtonPress}
      />
    </InteractionRow>
  </View>
);

export default CreateThoughtInteractionArea;
