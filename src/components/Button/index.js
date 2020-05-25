import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as NativeElementsButton } from 'react-native-elements';

import Icon from '@components/Icon';

import { fontSizes } from '@constants/fonts';
import { ifProp } from '@utils/props';
import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xLarge
  },
  iconContainer: {
    paddingVertical: 5
  }
});

const outlineProp = { type: 'outline' };
const iconProp = ({ iconName, iconType, containerStyle }) => ({
  icon: (
    <Icon
      name={iconName}
      type={iconType}
      containerStyle={containerStyle}
    />
  )
});

const Button = ({
  disabled,
  outline,
  iconName,
  iconType,
  text,
  style
}) => (
  <NativeElementsButton
    raised
    disabled={disabled}
    {...ifProp(outline && outlineProp)}
    {...ifProp(iconName && iconProp({ iconName, iconType, containerStyle: styles.iconContainer }))}
    title={text}
    containerStyle={style}
    titleStyle={styles.title}
  />
);

[Button.propTypes, Button.defaultProps] = createPropTypes({
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  text: [PropTypes.string, 'OK'],
  onPress: PropTypes.func,
  style: ViewPropTypes.style
});

export default Button;
