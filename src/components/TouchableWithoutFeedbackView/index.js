import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import View from '@components/View';

import { createPropTypes, PropTypes } from '@utils/propTypes';

const TouchableWithoutFeedbackView = ({ testID, children, onPress, style }) => (
  <TouchableWithoutFeedback testID={testID} onPress={onPress}>
    <View style={style}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

[TouchableWithoutFeedbackView.propTypes, TouchableWithoutFeedbackView.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: View.propTypes.style
});

export default TouchableWithoutFeedbackView;
