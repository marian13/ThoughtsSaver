import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '@components/TextInput';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { searchThoughtTagsTextSelector } from '@pages/ThoughtTagsPage/slice';

import searchThoughtTagsThunk from '../../thunks/searchThoughtTagsThunk';

import { SEARCH_THOUGHT_TAGS_INPUT } from '@pages/ThoughtTagsPage/constants/identifiers';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const SearchThoughtTagsInput = () => {
  const dispatch = useDispatch();

  const isInputFocused = useSelector(isFocusedSelector(SEARCH_THOUGHT_TAGS_INPUT));

  const searchText = useSelector(searchThoughtTagsTextSelector);

  const handleInputFocus = () => dispatch(focus(SEARCH_THOUGHT_TAGS_INPUT));
  const handleInputBlur = () => dispatch(blur(SEARCH_THOUGHT_TAGS_INPUT));

  const handleInputChange = text => dispatch(searchThoughtTagsThunk({ text }));

  return (
    <TextInput
      isFocused={isInputFocused}
      autoResise
      text={searchText}
      placeholder="Search for a tag..."
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onTextChange={handleInputChange}
      containerStyle={styles.textInputContainerStyle}
    />
  );
};

export default SearchThoughtTagsInput;
