import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '@pages/HomePage/components/Header';

import AddThoughtTagsModal from '@modals/AddThoughtTagsModal';

import ThoughtStreamContainer from '@pages/HomePage/containers/ThoughtStreamContainer';
import ThoughtInteractionAreaContainer from '@pages/HomePage/containers/ThoughtInteractionAreaContainer';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%'
  }
});

const HomePage = () => (
  <View style={styles.view}>
    <Header />

    <ThoughtStreamContainer />

    <ThoughtInteractionAreaContainer />

    <AddThoughtTagsModal />
  </View>
);

export default HomePage;
