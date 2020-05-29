import React from 'react';
import { StyleSheet } from 'react-native';

import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import InteractionRow from '@components/InteractionRow';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

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
      <Info thoughtInEditDraftTags={thoughtInEditDraftTags} />

      <IconButton iconName="close" onPress={onCancelEditThoughtTagsButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <TextInput
        isFocused={isSearchThoughtTagsInputFocused}
        autoResise
        text={searchThoughtTagsInputText}
        placeholder="Search for a tag..."
        onFocus={onSearchThoughtTagsInputFocus}
        onBlur={onSearchThoughtTagsInputBlur}
        onTextChange={onSearchThoughtTagsInputChange}
        containerStyle={styles.textInputContainerStyle}
      />

      <IconButton iconName="check-circle" onPress={onFinishEditThoughtTagsButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <IconButton iconName="keyboard-arrow-down" />
        <IconButton iconName="tag-faces" />
      </View>

      <IconButton iconName="more-vert" />
    </InteractionRow>
  </View>
);

export default SearchThoughtTagsInteractionArea;

