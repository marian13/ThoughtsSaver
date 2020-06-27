import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const ThoughtsModuleSlice = createSlice({
  name: 'ThoughtsModule',
  initialState,
  reducers
});

export const {
  createThought,
  updateThought
} = ThoughtsModuleSlice.actions;

export const {
  thoughtByIdSelector,
  thoughtsSelector
} = selectors;

export default ThoughtsModuleSlice.reducer;

