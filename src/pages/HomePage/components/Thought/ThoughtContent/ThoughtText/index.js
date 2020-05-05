import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { splitTextIntoWords } from '@utils/text';

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

const ThoughtText = ({ text }) => {
  if (!text) return null;

  return splitTextIntoWords(text).map((word, index) => (
    <View key={index}>
      <Text style={styles.text}>
        {word}
      </Text>
    </View>
  ));
};

export default ThoughtText;
