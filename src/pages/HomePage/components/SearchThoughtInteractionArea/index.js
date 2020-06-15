import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionRow from '@components/InteractionRow';
import IconButton from '@components/IconButton';
import TextInput from '@components/TextInput';
import View from '@components/View';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';
import ToggleEmojiPickerCollapseButton from '@pages/HomePage/components/ToggleEmojiPickerCollapseButton';

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
  isEmojiPickerCollapseVisible,
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
  onShowEmojiPickerCollapseButtonPress,
  onHideEmojiPickerCollapseButtonPress,
  onEmojiPick,
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

        <ToggleEmojiPickerCollapseButton
          isEmojiPickerCollapseVisible={isEmojiPickerCollapseVisible}
          onShowPress={onShowEmojiPickerCollapseButtonPress}
          onHidePress={onHideEmojiPickerCollapseButtonPress}
        />
      </View>

      <IconButton iconName="more-vert" />
    </InteractionRow>

    <SearchThoughtOptionsCollapseContainer />

    <EmojiPickerCollapse
      isVisible={isEmojiPickerCollapseVisible}
      onEmojiPick={onEmojiPick}
    />
  </View>
);

export default SearchThoughtInteractionArea;
