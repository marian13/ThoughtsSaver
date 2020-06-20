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
  setThought,
  resetThought,
  changeThoughtText,

  startCreateThoughtMode,
  finishCreateThoughtMode,
  setThoughtInCreate,

  startEditThoughtMode,
  finishEditThoughtMode,
  setThoughtInEdit,
  resetThoughtInEdit,

  startSearchThoughtMode,
  finishSearchThoughtMode,
  changeSearchThoughtInputText,
  appendEmojiToSearchThoughtInputText,
  changeSearchThoughtResults,
  changeSearchThoughtOptions
} = HomePageSlice.actions;

export const {
  thoughtSelector,
  thoughtIdSelector,
  thoughtTextSelector,

  isCreateThoughtModeSelector,
  thoughtInCreateSelector,

  isEditThoughtModeSelector,
  thoughtInEditSelector,
  thoughtInEditIdSelector,
  thoughtInEditTextSelector,

  isSearchThoughtModeSelector,
  isSearchThoughtByTextOptionSelectedSelector,
  isSearchThoughtByTagOptionSelectedSelector,
  isSearchThoughtFuzzyOptionSelectedSelector,
  searchThoughtInputTextSelector,
  searchThoughtResultsSelector,
  searchThoughtOptionsSelector
} = selectors;

export default HomePageSlice.reducer;
