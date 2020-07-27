import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { compact } from 'lodash';

import ShadowView from '@components/ShadowView';

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
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  smallText: {
    fontSize: 12
  }
});

const Tag = ({ small, text }) => (
  <ShadowView style={compact([styles.view, small && styles.smallView])}>
    <Text style={compact([styles.text, small && styles.smallText])}>
      {text}
    </Text>
  </ShadowView>
);

export default Tag;
