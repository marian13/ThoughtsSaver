import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text as NativeText } from 'react-native';

import { compact } from 'lodash';

import { fontSizes } from '@constants/fonts';

const styles = StyleSheet.create({
  white: { color: 'white' },
  bold: { fontWeight: 'bold' },
  small: { fontSize: fontSizes.small },
  medium: { fontSize: fontSizes.medium },
  large: { fontSize: fontSizes.large }
});

const Text = ({
  white,
  bold,
  reduced,
  small,
  medium,
  large,
  children,
  style,
  ...rest
}) => (
  <NativeText
    {...rest}
    {...(reduced ? { numberOfLines: 1, ellipsizeMode: 'tail' } : {})}
    style={compact([
      white && styles.white,
      bold && styles.bold,
      small && styles.small, medium && styles.medium, large && styles.large,
      style
    ])}
  >
    {children}
  </NativeText>
);

Text.propTypes = {
  white: PropTypes.bool,
  bold: PropTypes.bool,
  reduced: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};

Text.defaultProps = {
  white: false,
  bold: false,
  reduced: false,
  small: false,
  medium: true,
  large: false
};

export default Text;
