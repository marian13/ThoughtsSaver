import React from 'react';

import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import InteractionRow from '@components/InteractionRow';
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
      <Icon name="edit" />

      <Info thoughtInEditDraftTags={thoughtInEditDraftTags} />

      <IconButton iconName="close" onPress={onCancelEditThoughtTagsButtonPress} />
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

      <IconButton iconName="check-circle" onPress={onFinishEditThoughtTagsButtonPress} />
    </InteractionRow>
  </View>
);

export default SearchThoughtTagsInteractionArea;

