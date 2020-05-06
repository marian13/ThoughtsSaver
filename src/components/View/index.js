import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View as NativeView,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

import { compact } from 'lodash';

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
    alignContent: 'center'
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
        shadowRadius: 4
      }
    })
  }
});

const View = ({
  hasTopBorder,
  hasBottomBorder,
  hasShadow,
  avoidKeyboard,
  centered,
  children,
  style,
  ...rest
}) => {
  const Component = avoidKeyboard ? KeyboardAvoidingView : NativeView;

  return (
    <Component
      {...rest}
      {...(avoidKeyboard ? { behavior: Platform.OS === 'ios' ? 'padding' : 'height' } : {})}
      style={compact([
        hasTopBorder && styles.topBorder,
        hasBottomBorder && styles.bottomBorder,
        hasShadow && styles.shadow,
        centered && styles.center,
        style
      ])}
    >
      {children}
    </Component>
  );
};

View.propTypes = {
  hasTopBorder: PropTypes.bool,
  hasBottomBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  style: ViewPropTypes.style
};

View.defaultProps = {
  hasTopBorder: false,
  hasBottomBorder: false,
  hasShadow: false,
  centered: false,
  children: null,
  style: {}
};

export default View;
