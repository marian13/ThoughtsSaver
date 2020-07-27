import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import initialState from './initialState';

const TagsModuleSlice = createSlice({
  name: 'TagsModule',
  initialState,
  reducers
});

export const {
  createTag
} = TagsModuleSlice.actions;

export const {
  tagSeletor,
  tagsSelector
} = selectors;

export default TagsModuleSlice.reducer;

