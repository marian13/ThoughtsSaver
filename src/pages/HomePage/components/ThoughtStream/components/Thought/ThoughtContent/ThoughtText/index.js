import React from 'react';

import View from '@components/View';
import Text from '@components/Text';

import { splitTextIntoWords } from '@utils/text';

const ThoughtText = ({ text }) => {
  if (!text) return null;

  return splitTextIntoWords(text).map((word, index) => (
    <View key={index}>
      {/* <Text large style={{ borderWidth: 1 }}> */}
      <Text large>
        {word}
      </Text>
    </View>
  ));
};

export default ThoughtText;
