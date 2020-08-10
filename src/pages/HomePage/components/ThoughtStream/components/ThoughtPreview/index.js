import React from 'react';
import { StyleSheet } from 'react-native';

import ScrollView from '~/components/ScrollView';
import MarkdownView from '~/components/MarkdownView';

import { useIsStringEndChanged } from '~/utils/hooks';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 15,
    paddingRight: 40
  }
});

const ThoughtPreview = ({ thought }) => {
  const isTextEndChanged = useIsStringEndChanged(thought.text);

  return (
    <ScrollView scrollToBottomOnChange={isTextEndChanged}>
      <MarkdownView style={styles.view}>
        {thought.text}
      </MarkdownView>
    </ScrollView>
  );
};

export default ThoughtPreview;
