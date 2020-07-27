import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import ShadowView from '@components/ShadowView';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 10
  }
});

const Menu = ({ renderOptions, style }) => {
  return (
    <View style={[styles.view, style]}>
      <ShadowView>
        {renderOptions()}
      </ShadowView>
    </View>
  );
};

Menu.propTypes = {
  renderOptions: PropTypes.func,
  style: ViewPropTypes.style
};

Menu.defaultProps = {
  renderOptions: () => {},
  style: {}
};

export default Menu;
