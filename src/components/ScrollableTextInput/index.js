import React, { useLayoutEffect, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import IconButton from '@components/IconButton';

import { fontSizes } from '@constants/fonts';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    maxHeight: 155
  },
  containerStyle: {
    paddingHorizontal: 0
  },
  inputStyle: {
    minHeight: 20,
    textAlignVertical: 'bottom',
    paddingTop: 8,
    paddingBottom: 10,
    fontSize: fontSizes.large
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  iconButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent'
  }
});

const ScrollableTextInput = ({
  isFocused,
  text,
  placeholder,
  onFocus,
  onBlur,
  onTextChange
}) => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    isFocused ? inputRef.current.focus() : inputRef.current.blur();
  }, [isFocused]);

  const handleClearButtonPress = () => onTextChange('');

  const hasText = !!text;

  return (
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="always">
      <Input
        ref={inputRef}
        multiline
        textAlignVertical='top'
        value={text}
        placeholder={placeholder}
        onChangeText={onTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        containerStyle={styles.containerStyle}
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />

      {hasText && (
        <IconButton
          iconName='close'
          iconType='material'
          iconColor='#bfbfbf'
          onPress={handleClearButtonPress}
          style={styles.iconButton}
        />
      )}
    </ScrollView>
  );
};

export default ScrollableTextInput;
