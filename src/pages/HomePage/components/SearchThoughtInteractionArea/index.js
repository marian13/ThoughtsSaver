import React from 'react';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

const SearchThoughtInteractionArea = ({
  isSearchThoughtInputFocused,
  searchThoughtInputText,
  onSearchThoughtInputChange,
  onSearchThoughtInputFocus,
  onSearchThoughtInputBlur,
  onCancelSearchThoughtButtonPress,
  onFinishSearchThoughtButtonPress
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <IconButton
        iconName="emoticon-outline"
        iconType="material-community"
      />

      <IconButton
        iconName="close"
        onPress={onCancelSearchThoughtButtonPress}
      />
    </InteractionRow>

    <InteractionRow>
      <IconButton iconName="search" />

      <TextInput
        isFocused={isSearchThoughtInputFocused}
        autoResise
        text={searchThoughtInputText}
        placeholder="Search for a thought..."
        onFocus={onSearchThoughtInputFocus}
        onBlur={onSearchThoughtInputBlur}
        onTextChange={onSearchThoughtInputChange}
      />

      <IconButton
        iconName="check-circle"
        onPress={onFinishSearchThoughtButtonPress}
      />
    </InteractionRow>
  </View>
);

export default SearchThoughtInteractionArea;
