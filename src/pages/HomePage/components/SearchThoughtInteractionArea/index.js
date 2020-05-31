import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

import {
  SEARCH_THOUGHT_INPUT,
  SEARCH_THOUGHT_OPTIONS_BUTTON,
} from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const SearchThoughtInteractionArea = ({
  isSearchThoughtInputFocused,
  isSearchThoughtOptionsVisible,
  searchThoughtInputText,
  searchThoughtResults,
  onSearchThoughtInputChange,
  onSearchThoughtInputFocus,
  onSearchThoughtInputBlur,
  onCancelSearchThoughtButtonPress,
  onFinishSearchThoughtButtonPress,
  onShowSearchThoughtOptionsButtonPress,
  onHideSearchThoughtOptionsButtonPress,
  SearchThoughtOptionsCollapseContainer
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <Info
        searchThoughtInputText={searchThoughtInputText}
        searchThoughtResults={searchThoughtResults}
      />

      <IconButton iconName="close" onPress={onCancelSearchThoughtButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <TextInput
        testID={SEARCH_THOUGHT_INPUT}
        isFocused={isSearchThoughtInputFocused}
        autoResise
        text={searchThoughtInputText}
        placeholder="Enter your search term..."
        onFocus={onSearchThoughtInputFocus}
        onBlur={onSearchThoughtInputBlur}
        onTextChange={onSearchThoughtInputChange}
        containerStyle={styles.textInputContainerStyle}
      />

      <IconButton iconName="check-circle" onPress={onFinishSearchThoughtButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <IconButton
          testID={SEARCH_THOUGHT_OPTIONS_BUTTON}
          iconName={isSearchThoughtOptionsVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          onPress={() => (
            isSearchThoughtOptionsVisible
              ? onHideSearchThoughtOptionsButtonPress()
              : onShowSearchThoughtOptionsButtonPress()
          )}
        />
        <IconButton iconName="tag-faces" />
      </View>

      <IconButton iconName="more-vert" />
    </InteractionRow>

    <SearchThoughtOptionsCollapseContainer />
  </View>
);

export default SearchThoughtInteractionArea;
