import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%'
  }
})

const Menu = ({ renderOptions, containerStyle, style }) => {
  return (
    <View style={containerStyle}>
      <View hasShadow style={[styles.view, style]}>
        {renderOptions()}
      </View>
    </View>
  );
};

[Menu.propTypes, Menu.defaultProps] = createPropTypes({
  renderOptions: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style
});

export default Menu;
