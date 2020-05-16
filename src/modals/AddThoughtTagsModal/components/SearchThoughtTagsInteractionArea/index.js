import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

const SearchThoughtTagsInteractionArea = ({
  isSearchThoughtTagsInputFocused,
  searchThoughtTagsInputText,
  thoughtInEditDraftTags,
  onSearchThoughtTagsInputChange,
  onSearchThoughtTagsInputFocus,
  onSearchThoughtTagsInputBlur,
  onCancelEditThoughtTagsButtonPress,
  onFinishEditThoughtTagsButtonPress
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <IconButton iconName="edit" />

      <Info thoughtInEditDraftTags={thoughtInEditDraftTags} />

      <IconButton
        iconName="close"
        onPress={onCancelEditThoughtTagsButtonPress}
      />
    </InteractionRow>

    <InteractionRow>
      <IconButton iconName="search" />

      <TextInput
        isFocused={isSearchThoughtTagsInputFocused}
        autoResise
        text={searchThoughtTagsInputText}
        placeholder="Search for a tag..."
        onFocus={onSearchThoughtTagsInputFocus}
        onBlur={onSearchThoughtTagsInputBlur}
        onTextChange={onSearchThoughtTagsInputChange}
      />

      <IconButton
        iconName="check-circle"
        onPress={onFinishEditThoughtTagsButtonPress}
      />
    </InteractionRow>
  </View>
);

export default SearchThoughtTagsInteractionArea;

