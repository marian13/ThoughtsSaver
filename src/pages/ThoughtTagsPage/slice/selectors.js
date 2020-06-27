import { createSelector } from '@reduxjs/toolkit';

import { find, some } from 'lodash';

import { toBool } from '@utils/booleans';

const createThoughtTagsPageSelector = selector => (
  createSelector(state => state.ThoughtTagsPage, selector)
);

export const isVisibleSelector = createThoughtTagsPageSelector(state => {
  const { isVisible } = state;

  return isVisible;
});

export const isSearchThoughtTagsInputFocusedSelector = createThoughtTagsPageSelector(state => {
  const { focusSearchThoughtTagsInput } = state;

  return focusSearchThoughtTagsInput;
});

export const doesSearchThoughtTagsHasExactMatchResultSelector = createThoughtTagsPageSelector(state => {
  const { searchThoughtTagsExactMatchResult } = state;

  return some(searchThoughtTagsExactMatchResult);
});

export const doesThoughtHasTagSelector = params => createThoughtTagsPageSelector(state => {
  const { tag: { id } } = params;
  const { thought } = state;

  return toBool(find(thought.tags, { id }));
});

export const searchThoughtTagsTextSelector = createThoughtTagsPageSelector(state => {
  const { searchThoughtTagsText } = state;

  return searchThoughtTagsText;
});

export const searchThoughtTagsResultsSelector = createThoughtTagsPageSelector(state => {
  const { searchThoughtTagsResults } = state;

  return searchThoughtTagsResults;
});

export const thoughtTagsSelector = createThoughtTagsPageSelector(state => {
  const { thought } = state;

  return thought.tags || [];
});

export const thoughtInEditIdSelector = createThoughtTagsPageSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.id;
});
