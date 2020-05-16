import React from 'react';

import InteractionRow from '@components/InteractionRow';
import Icon from '@components/Icon';
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
      <IconButton iconName="more-vert" />

      <IconButton iconName="close" onPress={onCancelSearchThoughtButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <Icon name="search" />

      <TextInput
        isFocused={isSearchThoughtInputFocused}
        autoResise
        text={searchThoughtInputText}
        placeholder="Search for a thought..."
        onFocus={onSearchThoughtInputFocus}
        onBlur={onSearchThoughtInputBlur}
        onTextChange={onSearchThoughtInputChange}
      />

      <IconButton iconName="check-circle" onPress={onFinishSearchThoughtButtonPress} />
    </InteractionRow>
  </View>
);

export default SearchThoughtInteractionArea;
