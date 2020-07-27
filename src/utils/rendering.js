import React from 'react';
import { View } from 'react-native';

import { flatten } from 'lodash';

export const renderBlocksAsSingleRow = ({ blocks, containerStyle }) => (
  <View style={flatten([{ flexDirection: 'row' }, containerStyle])}>
    {blocks}
  </View>
);

export const renderBlocksAsSeparateRows = ({ blocks, containerStyle }) => {
  return (
    <View style={containerStyle}>
      {blocks.map(({ block, rowContainerStyle }, index) => (
        <View key={index} style={[{ flexDirection: 'row' }, rowContainerStyle]}>
          {block}
        </View>
      ))}
    </View>
  );
};
