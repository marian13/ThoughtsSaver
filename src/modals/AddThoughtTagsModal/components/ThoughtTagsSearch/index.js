import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';

import Info from './Info';

const ThoughtTagsSearch = ({
  isThoughtTagsSearchFocused,
  thoughtTagsSearchText,
  thoughtInEditDraftTags,
  onThoughtTagsSearchChange,
  onThoughtTagsSearchFocus,
  onThoughtTagsSearchBlur,
  onCancelEditThoughtTagsButtonPress,
  onFinishEditThoughtTagsButtonPress
}) => (
  <>
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
        text={thoughtTagsSearchText}
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
  </>
);

export default ThoughtTagsSearch;

