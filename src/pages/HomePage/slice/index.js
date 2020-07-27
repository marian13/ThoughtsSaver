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
  resetThoughtDraft,

  focusThoughtTextInput,
  blurThoughtTextInput,

  changeThoughtDraftText,

  startThoughtTextEditMode,
  cancelThoughtTextEditMode,
  finishThoughtTextEditMode,

  showThoughtMenu,
  hideThoughtMenu,
} = HomePageSlice.actions;

export const {
  isThoughtTextInputFocusedSelector,
  isThougthTextEditModeSelector,
  isThoughtMenuVisibleSelector,

  thoughtDraftTextSelector,
  thoughtInEditIdSelector,
  thoughtInEditTextSelector
} = selectors;

export default HomePageSlice.reducer;
