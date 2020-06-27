import React from 'react';
import { StyleSheet } from 'react-native';

import Page from '~/components/Page';

import Header from '~/pages/HomePage/components/Header';
import ThoughtStream from '~/pages/HomePage/components/ThoughtStream';
import ThoughtInteractionArea from '~/pages/HomePage/components/ThoughtInteractionArea';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-end'
  }
});

const HomePage = () => (
  <Page style={styles.page}>
    <Header />
    <ThoughtStream />
    <ThoughtInteractionArea />
  </Page>
);

export default HomePage;
