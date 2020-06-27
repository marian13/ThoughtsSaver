import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const ThoughtTagsPageSlice = createSlice({
  name: 'ThoughtTagsPage',
  initialState,
  reducers
});

export const {
  setThought,
  addTagToThought,
  removeTagFromThought,

  setThoughtInEdit,

  changeSearchThoughtTagsText,
  changeSearchThoughtTagsResults,

  resetThought,
  resetThoughtInEdit,
  resetSearchThoughtTagsText,
  resetSearchThoughtTagsResults
} = ThoughtTagsPageSlice.actions;

export const {
  doesSearchThoughtTagsHasExactMatchResultSelector,
  doesThoughtHasTagSelector,

  searchThoughtTagsTextSelector,
  searchThoughtTagsResultsSelector,

  thoughtTagsSelector,
  thoughtInEditIdSelector
} = selectors;

export default ThoughtTagsPageSlice.reducer;
