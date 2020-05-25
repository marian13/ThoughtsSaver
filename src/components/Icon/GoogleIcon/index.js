import React from 'react';
import { Image, StyleSheet } from 'react-native';

import View from '@components/View';

import googleLogoImage from '@images/google-logo-64px.png';
import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    padding: 10
  }
});

const GoogleIcon = ({ size, containerStyle }) => (
  <View centered style={[styles.view, containerStyle]}>
    <Image
      source={googleLogoImage}
      size={size}
      style={{ width: size, height: size }}
    />
  </View>
);

[GoogleIcon.propTypes, GoogleIcon.defaultProps] = createPropTypes({
  size: [PropTypes.number, 25],
  containerStyle: ViewPropTypes.style
});

export default GoogleIcon;
