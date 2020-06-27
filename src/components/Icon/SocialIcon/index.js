import React from 'react';
import { Image, StyleSheet } from 'react-native';

import View from '~/components/View';

import facebookLogoImage from '~/images/facebook-logo-64px.png';
import googleLogoImage from '~/images/google-logo-64px.png';
import { createPropTypes, PropTypes, ViewPropTypes } from '~/utils/propTypes';

const styles = StyleSheet.create({
  view: {
    padding: 10
  }
});

// TODO disabled
const SocialIcon = ({ name, size, containerStyle }) => (
  <View centered style={[styles.view, containerStyle]}>
    <Image
      source={
        (name === 'facebook' && facebookLogoImage) ||
        (name === 'google' && googleLogoImage)
      }
      size={size}
      style={{ width: size, height: size }}
    />
  </View>
);

[SocialIcon.propTypes, SocialIcon.defaultProps] = createPropTypes({
  disabled: PropTypes.bool,
  name: [PropTypes.string, 'google'],
  size: [PropTypes.number, 25],
  containerStyle: ViewPropTypes.style
});

export default SocialIcon;
