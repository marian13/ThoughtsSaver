import React from 'react';
import { View } from 'react-native';

import Divider from '@components/Divider';

const BorderedView = ({ hasTopBorder, hasBottomBorder, children, containerStyle, style }) => (
  <View style={containerStyle}>
    {hasTopBorder && <Divider />}

    <View style={style}>
      {children}
    </View>

    {hasBottomBorder && <Divider />}
  </View>
);

export default BorderedView;
