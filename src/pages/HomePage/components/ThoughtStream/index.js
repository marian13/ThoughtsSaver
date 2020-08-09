import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import View from '~/components/View';

import ThoughtList from './components/ThoughtList';
import ThoughtPreview from './components/ThoughtPreview';

import { isThoughtPreviewModeSelector, thoughtSelector } from '~/pages/HomePage/slice';

import { THOUGHT_STREAM } from '~/pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const ThoughtStream = () => {
  const isThoughtPreviewMode = useSelector(isThoughtPreviewModeSelector);
  const thought = useSelector(thoughtSelector);

  return (
    <View testID={THOUGHT_STREAM} style={styles.view}>
      {isThoughtPreviewMode ? <ThoughtPreview thought={thought} /> : <ThoughtList />}
    </View>
  );
};

export default ThoughtStream;
