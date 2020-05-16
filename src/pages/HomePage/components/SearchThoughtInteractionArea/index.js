import React from 'react';

import InteractionRow from '@components/InteractionRow';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import { SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

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
        testID={SEARCH_THOUGHT_INPUT}
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
