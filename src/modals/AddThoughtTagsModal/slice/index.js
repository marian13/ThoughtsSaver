import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const AddThoughtTagsModalSlice = createSlice({
  name: 'AddThoughtTagsModal',
  initialState,
  reducers
});

export const {
  showAddThoughtTagsModal,
  hideAddThoughtTagsModal,

  focusThoughtTagsSearch,
  blurThoughtTagsSearch,

  changeThoughtTagsSearchText,
  changeThoughtTagsSearchResults,

  startThoughtTagsEditMode,
  cancelThoughtTagsEditMode,
  finishThoughtTagsEditMode,

  addTagToThoughtDraft,
  removeTagFromThoughtDraft
} = AddThoughtTagsModalSlice.actions;

export const {
  isVisibleSelector,
  isThoughtTagsSearchFocusedSelector,

  doesThoughtTagsSearchHasExactMatchResultSelector,
  doesThoughtDraftHasTagSelector,

  thoughtTagsSearchTextSelector,
  thoughtTagsSearchResultsSelector,

  thoughtDraftTagsSelector,
  thoughtInEditIdSelector
} = selectors;

export default AddThoughtTagsModalSlice.reducer;
