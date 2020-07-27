import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  }
});

const BoldText = ({ children, style }) => (
  <Text style={[styles.text, style]}>
    {children}
  </Text>
);

export default BoldText;
