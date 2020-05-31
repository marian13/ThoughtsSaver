// https://redux-toolkit.js.org/tutorials/advanced-tutorial#creating-the-initial-state-slices

import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const HomePageSlice = createSlice({
  name: 'HomePage',
  initialState,
  reducers
});

export const {
  startCreateThoughtMode,
  finishCreateThoughtMode,

  startEditThoughtTextMode,
  finishEditThoughtTextMode,

  startSearchThoughtMode,
  finishSearchThoughtMode,

  resetThoughtInCreateDraft,
  changeThoughtInCreateDraftText,

  resetThoughtInEditDraft,
  changeThoughtInEditDraftText,

  setThoughtInEdit,
  resetThoughtInEdit,

  changeSearchThoughtInputText,
  changeSearchThoughtResults,
  changeSearchThoughtOptions
} = HomePageSlice.actions;

export const {
  isCreateThoughtModeSelector,
  isEditThoughtTextModeSelector,
  isSearchThoughtModeSelector,

  isSearchThoughtByTextOptionSelectedSelector,
  isSearchThoughtByTagOptionSelectedSelector,
  isSearchThoughtFuzzyOptionSelectedSelector,

  thoughtInCreateDraftTextSelector,

  thoughtInEditDraftTextSelector,

  thoughtInEditIdSelector,
  thoughtInEditTextSelector,

  searchThoughtInputTextSelector,
  searchThoughtResultsSelector,
  searchThoughtOptionsSelector
} = selectors;

export default HomePageSlice.reducer;
