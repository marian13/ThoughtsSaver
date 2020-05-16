import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import View from '@components/View';

import { ifProp } from '@utils/props';
import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

// preventTouchesOnChildren
// React Native does not bubble touch events
// https://stackoverflow.com/questions/49835883/how-can-i-propagate-touch-event-in-nested-touchable-in-react-native

const TouchableWithoutFeedbackView = ({
  testID,
  preventTouchesOnChildren,
  children,
  onPress,
  style
}) => (
  <TouchableWithoutFeedback testID={testID} onPress={onPress}>
    <View
      {...ifProp(preventTouchesOnChildren && { onStartShouldSetResponderCapture: () => true })}
      style={style}
    >
      {children}
    </View>
  </TouchableWithoutFeedback>
);

[TouchableWithoutFeedbackView.propTypes, TouchableWithoutFeedbackView.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  preventTouchesOnChildren: PropTypes.bool,
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
});

export default TouchableWithoutFeedbackView;
