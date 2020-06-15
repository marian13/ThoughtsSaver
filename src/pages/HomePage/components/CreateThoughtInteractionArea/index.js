import React from 'react';
import { StyleSheet } from 'react-native';

import { isEmpty } from 'lodash';

import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import InteractionRow from '@components/InteractionRow';
import OverlayMenu from '@components/OverlayMenu';
import TextInput from '@components/TextInput';
import View from '@components/View';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';
import ToggleEmojiPickerCollapseButton from '@pages/HomePage/components/ToggleEmojiPickerCollapseButton';

import {
  CREATE_THOUGHT_TEXT_INPUT,
  CREATE_THOUGHT_BUTTON,
  GENERAL_THOUGHT_OPTIONS_BUTTON
} from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const CreateThoughtInteractionArea = ({
  isCreateThoughtTextInputFocused,
  isGeneralThoughtOptionsMenuVisible,
  isEmojiPickerCollapseVisible,
  thoughtInCreateDraftText,
  onCreateThoughtTextInputChange,
  onCreateThoughtTextInputFocus,
  onCreateThoughtTextInputBlur,
  onCreateThoughtButtonPress,
  onGeneralThoughtOptionsButtonPress,
  onGeneralThoughtOptionsMenuBackdropPress,
  onShowEmojiPickerCollapseButtonPress,
  onHideEmojiPickerCollapseButtonPress,
  onEmojiPick,
  GeneralThoughtMenuOptionsContainer
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <TextInput
        testID={CREATE_THOUGHT_TEXT_INPUT}
        isFocused={isCreateThoughtTextInputFocused}
        autoResise
        text={thoughtInCreateDraftText}
        placeholder="Save a new thought..."
        onFocus={onCreateThoughtTextInputFocus}
        onBlur={onCreateThoughtTextInputBlur}
        onTextChange={onCreateThoughtTextInputChange}
        containerStyle={styles.textInputContainerStyle}
      />

      <IconButton
        testID={CREATE_THOUGHT_BUTTON}
        disabled={isEmpty(thoughtInCreateDraftText)}
        iconName="send"
        onPress={onCreateThoughtButtonPress}
      />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <IconButton iconName="keyboard-arrow-down" />

        <ToggleEmojiPickerCollapseButton
          isEmojiPickerCollapseVisible={isEmojiPickerCollapseVisible}
          onShowPress={onShowEmojiPickerCollapseButtonPress}
          onHidePress={onHideEmojiPickerCollapseButtonPress}
        />

        <IconButton iconName="attach-file" />
      </View>

      <View horizontal>
        <IconButton iconName="mic" />
        <IconButton iconName="photo-camera" />

        <OverlayMenu
          isVisible={isGeneralThoughtOptionsMenuVisible}
          onContentPress={onGeneralThoughtOptionsButtonPress}
          onBackdropPress={onGeneralThoughtOptionsMenuBackdropPress}
          renderContent={() => <Icon testID={GENERAL_THOUGHT_OPTIONS_BUTTON} name="more-vert" />}
          renderOptions={() => <GeneralThoughtMenuOptionsContainer />}
          height={100}
          width="55%"
        />
      </View>
    </InteractionRow>

    <EmojiPickerCollapse
      isVisible={isEmojiPickerCollapseVisible}
      onEmojiPick={onEmojiPick}
    />
  </View>
);

export default CreateThoughtInteractionArea;
