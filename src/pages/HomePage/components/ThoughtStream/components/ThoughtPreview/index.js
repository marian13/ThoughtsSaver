import React from 'react';
import { StyleSheet } from 'react-native';

import ScrollView from '~/components/ScrollView';
import MarkdownView from '~/components/MarkdownView';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 15,
    paddingRight: 40
  }
});

const ThoughtPreview = ({ thought }) => (
  <ScrollView>
    <MarkdownView style={styles.view}>
      {thought.text}
    </MarkdownView>
  </ScrollView>
);

export default ThoughtPreview;
