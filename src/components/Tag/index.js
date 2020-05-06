import React from 'react';
import { StyleSheet } from 'react-native';

import { compact } from 'lodash';

import View from '@components/View';
import Text from '@components/Text';

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgb(32,150,243)',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  // WARNING fragile code #1
  // ThoughtTextInputSection InteracitionArea Content and
  // ThoughtsTagsSearchSections InteracitionArea Content depend on small styles
  smallView: {
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 1
  }
});

const Tag = ({ small, text }) => (
  <View hasShadow style={compact([styles.view, small && styles.smallView])}>
    <Text white small={small} large={!small}>
      {text}
    </Text>
  </View>
);

export default Tag;
