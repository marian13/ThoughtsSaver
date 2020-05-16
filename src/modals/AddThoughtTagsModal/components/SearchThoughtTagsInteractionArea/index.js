import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

const SearchThoughtTagsInteractionArea = ({
  isThoughtTagsSearchFocused,
  searchThoughtTagsInputText,
  thoughtInEditDraftTags,
  onThoughtTagsSearchChange,
  onThoughtTagsSearchFocus,
  onThoughtTagsSearchBlur,
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
        isFocused={isThoughtTagsSearchFocused}
        autoResise
        text={searchThoughtTagsInputText}
        placeholder="Search for a tag..."
        onFocus={onThoughtTagsSearchFocus}
        onBlur={onThoughtTagsSearchBlur}
        onTextChange={onThoughtTagsSearchChange}
      />

      <IconButton
        iconName="check-circle"
        onPress={onFinishEditThoughtTagsButtonPress}
      />
    </InteractionRow>
  </View>
);

export default SearchThoughtTagsInteractionArea;

