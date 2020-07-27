import { createSelector } from '@reduxjs/toolkit';

import { find, some } from 'lodash';

const createAddThoughtTagsModalSelector = selector => (
  createSelector(state => state.AddThoughtTagsModal, selector)
);

export const isVisibleSelector = createAddThoughtTagsModalSelector(state => {
  const { isVisible } = state;

  return isVisible;
});

export const isThoughtTagsSearchFocusedSelector = createAddThoughtTagsModalSelector(state => {
  const { focusThoughtTagsSearch } = state;

  return focusThoughtTagsSearch;
});

export const doesThoughtTagsSearchHasExactMatchResultSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtTagsSearchExactMatchResult } = state;

  return some(thoughtTagsSearchExactMatchResult);
});

export const doesThoughtDraftHasTagSelector = params => createAddThoughtTagsModalSelector(state => {
  const { tag: { id } } = params;
  const { thoughtDraft } = state;

  return find(thoughtDraft.tags, { id });
});

export const thoughtTagsSearchTextSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtTagsSearchText } = state;

  return thoughtTagsSearchText;
});

export const thoughtTagsSearchResultsSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtTagsSearchResults } = state;

  return thoughtTagsSearchResults;
});

export const thoughtDraftTagsSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtDraft } = state;

  return thoughtDraft.tags;
});

export const thoughtInEditIdSelector = createAddThoughtTagsModalSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.id;
});
