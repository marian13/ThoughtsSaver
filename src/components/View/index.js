import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View as NativeView
} from 'react-native';

import { compact } from 'lodash';

import { ifProp } from '@utils/props';
import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  topBorder: {
    borderTopColor: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    borderTopWidth: 1
  },
  bottomBorder: {
    borderBottomColor: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    borderBottomWidth: 1
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  horizontal: {
    flexDirection: 'row',
  },
  shadow: {
    // https://github.com/react-native-elements/react-native-elements/blob/v1.2.7/src/overlay/Overlay.js#L115
    backgroundColor: 'white',
    borderRadius: 3,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 1
      }
    })
  },
  hidden: {
    opacity: 0
  }
});

const avoidKeyboardProp = { behavior: Platform.OS === 'ios' ? 'padding' : 'height' };
const disallowChildrenTouchesProp = { onStartShouldSetResponderCapture: () => true };

const View = ({
  displayed,
  hidden,
  disallowChildrenTouches,
  hasTopBorder,
  hasBottomBorder,
  hasShadow,
  avoidKeyboard,
  centered,
  fullWidth,
  fullHeight,
  horizontal,
  children,
  style,
  ...rest
}) => {
  if (!displayed) return null;

  const Component = avoidKeyboard ? KeyboardAvoidingView : NativeView;

  return (
    <Component
      {...rest}
      {...ifProp(avoidKeyboard && avoidKeyboardProp)}
      {...ifProp(disallowChildrenTouches && disallowChildrenTouchesProp) }
      {...ifProp(hidden && disallowChildrenTouchesProp) }
      style={compact([
        hasTopBorder && styles.topBorder,
        hasBottomBorder && styles.bottomBorder,
        hasShadow && styles.shadow,
        centered && styles.center,
        fullWidth && styles.fullWidth,
        fullHeight && styles.fullHeight,
        horizontal && styles.horizontal,
        style,
        hidden && styles.hidden
      ])}
    >
      {children}
    </Component>
  );
};

[View.propTypes, View.defaultProps] = createPropTypes({
  displayed: [PropTypes.bool, true],
  hidden: PropTypes.bool,
  disallowChildrenTouches: PropTypes.bool,
  hasTopBorder: PropTypes.bool,
  hasBottomBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  avoidKeyboard: PropTypes.bool,
  centered: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  style: ViewPropTypes.style
});

export default View;
