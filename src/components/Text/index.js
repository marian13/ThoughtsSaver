import React from 'react';
import { StyleSheet, Text as NativeText } from 'react-native';

import { compact } from 'lodash';

import { fontSizes } from '@constants/fonts';

import { ifProp } from '@utils/props';
import { createPropTypes, PropTypes } from '@utils/propTypes';

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
    {...ifProp(reduced && { numberOfLines: 1, ellipsizeMode: 'tail' })}
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

[Text.propTypes, Text.defaultProps] = createPropTypes({
  white: PropTypes.bool,
  bold: PropTypes.bool,
  reduced: PropTypes.bool,
  small: PropTypes.bool,
  medium: [PropTypes.bool, true],
  large: PropTypes.bool,
  children: PropTypes.any,
  style: NativeText.propTypes.style
});

export default Text;
