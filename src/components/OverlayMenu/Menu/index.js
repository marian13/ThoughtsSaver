import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import View from '@components/View';

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

Menu.propTypes = {
  renderOptions: PropTypes.func,
  style: View.propTypes.style
};

Menu.defaultProps = {
  renderOptions: () => {},
  style: {}
};

export default Menu;
