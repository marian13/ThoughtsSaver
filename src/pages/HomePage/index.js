import React from 'react';
import { StyleSheet } from 'react-native';

import Page from '@components/Page';
import Header from '@pages/HomePage/components/Header';
import AddThoughtTagsModal from '@modals/AddThoughtTagsModal';

import ThoughtStreamContainer from '@pages/HomePage/containers/ThoughtStreamContainer';
import ThoughtInteractionAreaContainer from '@pages/HomePage/containers/ThoughtInteractionAreaContainer';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-end'
  }
});

const HomePage = () => (
  <Page style={styles.page}>
    <Header />

    <ThoughtStreamContainer />

    <ThoughtInteractionAreaContainer />

    <AddThoughtTagsModal />
  </Page>
);

export default HomePage;
