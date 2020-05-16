import { createSelector } from '@reduxjs/toolkit';

import { find, some } from 'lodash';

const createAddThoughtTagsModalSelector = selector => (
  createSelector(state => state.AddThoughtTagsModal, selector)
);

export const isVisibleSelector = createAddThoughtTagsModalSelector(state => {
  const { isVisible } = state;

  return isVisible;
});

export const isSearchThoughtTagsInputFocusedSelector = createAddThoughtTagsModalSelector(state => {
  const { focusSearchThoughtTagsInput } = state;

  return focusSearchThoughtTagsInput;
});

export const doesSearchThoughtTagsHasExactMatchResultSelector = createAddThoughtTagsModalSelector(state => {
  const { searchThoughtTagsInputExactMatchResult } = state;

  return some(searchThoughtTagsInputExactMatchResult);
});

export const doesThoughtInEditDraftHasTagSelector = params => createAddThoughtTagsModalSelector(state => {
  const { tag: { id } } = params;
  const { thoughtInEditDraft } = state;

  return find(thoughtInEditDraft.tags, { id });
});

export const searchThoughtTagsInputTextSelector = createAddThoughtTagsModalSelector(state => {
  const { searchThoughtTagsInputText } = state;

  return searchThoughtTagsInputText;
});

export const searchThoughtTagsInputResultsSelector = createAddThoughtTagsModalSelector(state => {
  const { searchThoughtTagsInputResults } = state;

  return searchThoughtTagsInputResults;
});

export const thoughtInEditDraftTagsSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtInEditDraft } = state;

  return thoughtInEditDraft.tags;
});

export const thoughtInEditIdSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.id;
});
