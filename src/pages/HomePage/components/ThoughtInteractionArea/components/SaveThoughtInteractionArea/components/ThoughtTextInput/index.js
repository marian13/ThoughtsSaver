import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TextInput from '~/components/TextInput';

import { isFocusedSelector, focus, blur } from '~/modules/FocusesModule/slice';
import { thoughtTextSelector, changeThoughtText } from '~/pages/HomePage/slice';

import { THOUGHT_TEXT_INPUT } from '~/pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const ThoughtTextInput = () => {
  const dispatch = useDispatch();

  const isInputFocused = useSelector(isFocusedSelector(THOUGHT_TEXT_INPUT));

  const thoughtText = useSelector(thoughtTextSelector);

  const handleInputChange = text => dispatch(changeThoughtText({ text }));
  const handleInputFocus = () => dispatch(focus(THOUGHT_TEXT_INPUT));
  const handleInputBlur = () => dispatch(blur(THOUGHT_TEXT_INPUT));

  return (
    <TextInput
      testID={THOUGHT_TEXT_INPUT}
      isFocused={isInputFocused}
      autoResise
      text={thoughtText}
      placeholder="Save a thought..."
      onTextChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      containerStyle={styles.textInputContainerStyle}
    />
  );
};

export default ThoughtTextInput;
