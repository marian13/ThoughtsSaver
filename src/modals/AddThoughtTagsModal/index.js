import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, StyleSheet, View } from 'react-native';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';

import SearchResultsContainer from '@modals/AddThoughtTagsModal/containers/SearchResultsContainer';
import ThoughtTagsSearchContainer from '@modals/AddThoughtTagsModal/containers/ThoughtTagsSearchContainer';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%'
  }
});

const AddThoughtTagsModal = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector(isVisibleSelector('addThoughtTagsModal'));

  const handleModalRequestClose = () => dispatch(hide('addThoughtTagsModal'));

  if (!isVisible) return null;

  return (
    <Modal visible={isVisible} onRequestClose={handleModalRequestClose}>
      <View style={styles.view}>
        <SearchResultsContainer />

        <ThoughtTagsSearchContainer />
      </View>
    </Modal>
  );
};

export default AddThoughtTagsModal;
