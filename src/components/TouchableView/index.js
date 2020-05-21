import React from 'react';
import Touchable from 'react-native-touchable-safe';

import View from '@components/View';

import { ifProp } from '@utils/props';
import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const withoutFeedbackProp = { all: 'without' };

const TouchableView = ({
  testID,
  disabled,
  withoutFeedback,
  children,
  onPress,
  style,
  containerStyle
}) => (
  <Touchable
    testID={testID}
    disabled={disabled}
    {...ifProp(withoutFeedback && withoutFeedbackProp)}
    onPress={onPress}
    outerStyle={containerStyle}
  >
    <View style={style}>
      {children}
    </View>
  </Touchable>
);

[TouchableView.propTypes, TouchableView.defaultProps] = createPropTypes({
  testID: PropTypes.string,
  disabled: PropTypes.bool,
  withoutFeedback: PropTypes.bool,
  children: PropTypes.node,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style
});

export default TouchableView;
