import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';

const CreateThoughtInteractionArea = ({
  isCreateThoughtTextInputFocused,
  thoughtInCreateDraftText,
  onCreateThoughtTextInputChange,
  onCreateThoughtTextInputFocus,
  onCreateThoughtTextInputBlur,
  onCreateThoughtButtonPress
}) => (
  <InteractionRow>
    <IconButton
      iconName="emoticon-outline"
      iconType="material-community"
    />

    <TextInput
      isFocused={isCreateThoughtTextInputFocused}
      autoResise
      text={thoughtInCreateDraftText}
      placeholder="Save a new thought..."
      onFocus={onCreateThoughtTextInputFocus}
      onBlur={onCreateThoughtTextInputBlur}
      onTextChange={onCreateThoughtTextInputChange}
    />

    <IconButton
      iconName="send"
      onPress={onCreateThoughtButtonPress}
    />
  </InteractionRow>
);

export default CreateThoughtInteractionArea;
