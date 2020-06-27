import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import Page from '@components/Page';

import SearchResults from '@pages/ThoughtTagsPage/components/SearchResults';
import SearchThoughtTagsInteractionArea from '@pages/ThoughtTagsPage/components/SearchThoughtTagsInteractionArea';

import initThunk from './thunks/initThunk';

import { useMountEffect } from '@utils/hooks';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-end'
  }
});

const ThoughtTagsPage = () => {
  const dispatch = useDispatch();
  const { params: { thoughtId } } = useRoute();

  useMountEffect(() => dispatch(initThunk({ thoughtId })));

  return (
    <Page style={styles.page}>
      <SearchResults />
      <SearchThoughtTagsInteractionArea />
    </Page>
  );
};

export default ThoughtTagsPage;
