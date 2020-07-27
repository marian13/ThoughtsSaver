import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, Platform } from 'react-native';

const KeyboardAvoidingView = ({ children, ...rest }) => (
  <RNKeyboardAvoidingView
    {...rest}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    {children}
  </RNKeyboardAvoidingView>
);

export default KeyboardAvoidingView;
