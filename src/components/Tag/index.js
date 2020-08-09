import React from 'react';
import { StyleSheet } from 'react-native';

import { compact } from 'lodash';

import View from '~/components/View';
import Text from '~/components/Text';

const styles = StyleSheet.create({
  innerView: {
    backgroundColor: 'rgb(32,150,243)',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  small: {
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 1
  }
});

const Tag = ({ small, text, containerStyle }) => (
  <View style={containerStyle}>
    <View hasShadow style={compact([styles.innerView, small && styles.small])}>
      <Text white small={small} large={!small}>
        {text}
      </Text>
    </View>
  </View>
);

export default Tag;
