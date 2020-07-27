import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SearchResultsSection from './components/SearchResultsSection';
import ThoughtTagsSearchSection from './components/ThoughtTagsSearchSection';

import {
  isThoughtTagsSearchFocusedSelector,

  thoughtTagsSearchTextSelector,
  thoughtTagsSearchResultsSelector,
  thoughtDraftTagsSelector,

  hideAddThoughtTagsModal,

  cancelThoughtTagsEditMode,

  focusThoughtTagsSearch,
  blurThoughtTagsSearch
} from '@modals/AddThoughtTagsModal/slice';

import thoughtTagsSearchChangeThunk from './thunks/thoughtTagsSearchChangeThunk';
import finishThoughtTagsEditModeButtonPressThunk from './thunks/finishThoughtTagsEditModeButtonPressThunk';

import SearchResultContainer from './containers/SearchResultContainer';
import NoExactMatchSearchResultContainer from './containers/NoExactMatchSearchResultContainer';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%'
  }
});

const AddThoughtTagsModal = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  const dispatch = useDispatch();

  const isThoughtTagsSearchFocused = useSelector(isThoughtTagsSearchFocusedSelector);
  const thoughtTagsSearchText = useSelector(thoughtTagsSearchTextSelector);
  const thoughtTagsSearchResults = useSelector(thoughtTagsSearchResultsSelector);
  const thoughtDraftTags = useSelector(thoughtDraftTagsSelector);

  const handleThoughtTagsSearchFocus = () => dispatch(focusThoughtTagsSearch());
  const handleThoughtTagsSearchBlur = () => dispatch(blurThoughtTagsSearch());

  const handleCancelThoughtTagsEditModeButtonPress = () => {
    dispatch(hideAddThoughtTagsModal());

    dispatch(cancelThoughtTagsEditMode());
  };

  const handleModalRequestClose = () => dispatch(hideAddThoughtTagsModal());

  const handleThoughtTagsSearchChange = text => dispatch(thoughtTagsSearchChangeThunk({ text }));
  const handleFinishThoughtTagsEditModeButtonPress = () => dispatch(finishThoughtTagsEditModeButtonPressThunk());

  return (
    <Modal visible={isVisible} onRequestClose={handleModalRequestClose}>
      <View style={styles.view}>
        <SearchResultsSection
          searchResults={thoughtTagsSearchResults}
          SearchResultContainer={SearchResultContainer}
          NoExactMatchSearchResultContainer={NoExactMatchSearchResultContainer}
        />

        <ThoughtTagsSearchSection
          isThoughtTagsSearchFocused={isThoughtTagsSearchFocused}
          thoughtDraftTags={thoughtDraftTags}
          thoughtTagsSearchText={thoughtTagsSearchText}
          onThoughtTagsSearchChange={handleThoughtTagsSearchChange}
          onThoughtTagsSearchFocus={handleThoughtTagsSearchFocus}
          onThoughtTagsSearchBlur={handleThoughtTagsSearchBlur}
          onCancelThoughtTagsEditModeButtonPress={handleCancelThoughtTagsEditModeButtonPress}
          onFinishThoughtTagsEditModeButtonPress={handleFinishThoughtTagsEditModeButtonPress}
        />
      </View>
    </Modal>
  );
};

export default AddThoughtTagsModal;
