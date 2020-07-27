import React from 'react';
import { Text } from 'react-native';

const ReducedText = ({ children, style }) => (
  <Text numberOfLines={1} ellipsizeMode="tail" style={style}>
    {children}
  </Text>
);

export default ReducedText;
