import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%'
  }
});

const Page = ({ children, style }) => (
  <View style={[styles.view, style]}>
    {children}
  </View>
);

[Page.propTypes, Page.defaultProps] = createPropTypes({
  children: PropTypes.node,
  style: ViewPropTypes.style
});

export default Page;
