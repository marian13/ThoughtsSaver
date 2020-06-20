import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '@components/TextInput';

import { isFocusedSelector, focus, blur } from '@modules/FocusesModule/slice';
import { searchThoughtTextSelector } from '@pages/HomePage/slice';

import { SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

import changeSearchThoughtTextThunk from '@pages/HomePage/components/SearchThoughtInteractionArea/thunks/changeSearchThoughtTextThunk';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const SearchThoughtInput = () => {
  const dispatch = useDispatch();

  const isInputFocused = useSelector(isFocusedSelector(SEARCH_THOUGHT_INPUT));

  const searchThoughtText = useSelector(searchThoughtTextSelector);

  const handleInputFocus = () => dispatch(focus(SEARCH_THOUGHT_INPUT));
  const handleInputBlur = () => dispatch(blur(SEARCH_THOUGHT_INPUT));

  const handleInputChange = text => dispatch(changeSearchThoughtTextThunk({ text }));

  return (
    <TextInput
      testID={SEARCH_THOUGHT_INPUT}
      isFocused={isInputFocused}
      autoResise
      text={searchThoughtText}
      placeholder="Enter your search term..."
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onTextChange={handleInputChange}
      containerStyle={styles.textInputContainerStyle}
    />
  );
};

export default SearchThoughtInput;
