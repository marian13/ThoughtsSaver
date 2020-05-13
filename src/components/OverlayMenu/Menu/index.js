import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';

import { createPropTypes, PropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 10
  }
});

const Menu = ({ renderOptions, style }) => {
  return (
    <View style={[styles.view, style]}>
      <View hasShadow>
        {renderOptions()}
      </View>
    </View>
  );
};

[Menu.propTypes, Menu.defaultProps] = createPropTypes({
  renderOptions: PropTypes.func,
  style: View.propTypes.style
});

export default Menu;
