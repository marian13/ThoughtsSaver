import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const VisibilitiesModuleSlice = createSlice({
  name: 'VisibilitiesModule',
  initialState,
  reducers
});

export const {
  show,
  hide
} = VisibilitiesModuleSlice.actions;

export const {
  isVisibleSelector
} = selectors;

export default VisibilitiesModuleSlice.reducer;

