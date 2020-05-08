import React, { useLayoutEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import ScrollView from '@components/ScrollView';
import IconButton from '@components/IconButton';

import { fontSizes } from '@constants/fonts';

import { createPropTypes, PropTypes } from '@utils/propTypes';

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

const TextInput = ({
  testID,
  isFocused,
  autoResise,
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
        testID={testID}
        ref={inputRef}
        multiline={autoResise}
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

[TextInput.propTypes, TextInput.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  isFocused: PropTypes.bool,
  autoResise: PropTypes.bool,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onTextChange: PropTypes.func
});

export default TextInput;
