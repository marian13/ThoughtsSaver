import React from 'react';

import View from '@components/View';

import { createPropTypes, PropTypes, ViewPropTypes } from '@utils/propTypes';

const Page = ({ children, style }) => (
  <View fullWidth fullHeight style={style}>
    {children}
  </View>
);

[Page.propTypes, Page.defaultProps] = createPropTypes({
  children: PropTypes.node,
  style: ViewPropTypes.style
});

export default Page;
