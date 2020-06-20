import React from 'react';
import { StyleSheet } from 'react-native';

import Page from '@components/Page';
import Header from '@pages/HomePage/components/Header';
import AddThoughtTagsModal from '@modals/AddThoughtTagsModal';

import ThoughtStream from '@pages/HomePage/components/ThoughtStream';
import ThoughtInteractionAreaContainer from '@pages/HomePage/containers/ThoughtInteractionAreaContainer';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-end'
  }
});

const HomePage = () => (
  <Page style={styles.page}>
    <Header />

    <ThoughtStream />

    <ThoughtInteractionAreaContainer />

    <AddThoughtTagsModal />
  </Page>
);

export default HomePage;
