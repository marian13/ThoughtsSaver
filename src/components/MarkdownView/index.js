import React from 'react';
import { StyleSheet } from 'react-native';

import Markdown from 'react-native-markdown-display';

import View from '~/components/View';

import { toString } from '~/utils/strings';
import { createPropTypes, PropTypes, ViewPropTypes } from '~/utils/propTypes';

import { fontSizes } from '~/constants/fonts';

const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: fontSizes.heading1
  },
  heading2: {
    fontSize: fontSizes.heading2
  },
  heading3: {
    fontSize: fontSizes.heading3
  },
  heading4: {
    fontSize: fontSizes.heading4
  },
  heading5: {
    fontSize: fontSizes.heading5
  },
  heading6: {
    fontSize: fontSizes.heading6
  },
  body: {
    fontSize: fontSizes.large
  }
});

const MarkdownView = ({ children: markdownText, style }) => (
  <View style={style}>
    <Markdown style={markdownStyles}>{toString(markdownText)}</Markdown>
  </View>
);

[MarkdownView.propTypes, MarkdownView.defaultProps] = createPropTypes({
  children: PropTypes.string,
  style: ViewPropTypes.style
});

export default MarkdownView;
