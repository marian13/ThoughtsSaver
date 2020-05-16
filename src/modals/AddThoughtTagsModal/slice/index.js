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
  changeSearchThoughtTagsInputText,
  changeSearchThoughtTagsInputResults,

  setThoughtInEditDraft,
  addTagToThoughtInEditDraft,
  removeTagFromThoughtInEditDraft,

  setThoughtInEdit
} = AddThoughtTagsModalSlice.actions;

export const {
  doesSearchThoughtTagsHasExactMatchResultSelector,
  doesThoughtInEditDraftHasTagSelector,

  searchThoughtTagsInputTextSelector,
  searchThoughtTagsInputResultsSelector,

  thoughtInEditDraftTagsSelector,
  thoughtInEditIdSelector
} = selectors;

export default AddThoughtTagsModalSlice.reducer;
