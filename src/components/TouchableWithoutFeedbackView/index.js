import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

const TouchableWithoutFeedbackView = ({ children, onPress, style }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={style}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default TouchableWithoutFeedbackView;
