import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const FocusesModuleSlice = createSlice({
  name: 'FocusesModule',
  initialState,
  reducers
});

export const {
  focus,
  blur
} = FocusesModuleSlice.actions;

export const {
  isFocusedSelector
} = selectors;

export default FocusesModuleSlice.reducer;

