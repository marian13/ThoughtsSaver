import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon as NativeElementsIcon } from 'react-native-elements';

import View from '@components/View';
import SocialIcon from './SocialIcon';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    padding: 10
  }
});

const Icon = ({
  name,
  type,
  color,
  size,
  containerStyle
}) => {
  if (['facebook', 'google'].includes(name)) {
    return <SocialIcon name={name} size={size} containerStyle={containerStyle} />;
  }

  return (
    <View centered style={[styles.view, containerStyle]}>
      <NativeElementsIcon
        name={name}
        type={type}
        color={color}
        size={size}
      />
    </View>
  );
};

[Icon.propTypes, Icon.defaultProps] = createPropTypes({
  name: [PropTypes.string, 'web-asset'],
  type: [PropTypes.string, 'material'],
  color: [PropTypes.string, '#f50'],
  size: [PropTypes.number, 25],
  containerStyle: ViewPropTypes.style
});

export default Icon;
