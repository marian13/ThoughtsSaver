import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

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
  <View avoidKeyboard>
    <InteractionRow>
      <IconButton iconName="edit" />

      <Info thoughtInEditText={thoughtInEditText} />

      <IconButton
        iconName="close"
        onPress={onCancelEditThoughtTextModeButtonPress}
      />
    </InteractionRow>

    <InteractionRow>
      <IconButton
        iconName="emoticon-outline"
        iconType="material-community"
      />

      <TextInput
        isFocused={isEditThoughtTextInputFocused}
        autoResise
        text={thoughtInEditDraftText}
        placeholder="Save a new thought..."
        onFocus={onEditThoughtTextInputFocus}
        onBlur={onEditThoughtTextInputBlur}
        onTextChange={onEditThoughtTextInputChange}
      />

      <IconButton
        iconName="check-circle"
        onPress={onFinishEditThoughtTextModeButtonPress}
      />
    </InteractionRow>
  </View>
);

export default EditThoughtTextInteractionArea;
