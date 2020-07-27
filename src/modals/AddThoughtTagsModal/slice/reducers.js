import { clone, orderBy, remove } from 'lodash';

import initialState from './initialState';

export const showAddThoughtTagsModal = state => {
  state.isVisible = true;
};

export const hideAddThoughtTagsModal = state => {
  state.isVisible = false;
};

export const focusThoughtTagsSearch = state => {
  state.focusThoughtTagsSearch = true;
};

export const blurThoughtTagsSearch = state => {
  state.focusThoughtTagsSearch = false;
};

export const changeThoughtTagsSearchText = (state, action) => {
  const { text } = action.payload;

  state.thoughtTagsSearchText = text;
};

export const changeThoughtTagsSearchResults = (state, action) => {
  const { exactMatchResult, results } = action.payload;

  state.thoughtTagsSearchExactMatchResult = exactMatchResult;
  state.thoughtTagsSearchResults = results;
};

export const startThoughtTagsEditMode = (state, action) => {
  const { thought } = action.payload;

  state.isThoughtTagsEditMode = true;

  state.thoughtDraft = clone(thought);
  state.thoughtInEdit = thought;
};

export const cancelThoughtTagsEditMode = state => {
  state.isThoughtTagsEditMode = false;

  state.thoughtDraft = initialState.thoughtDraft;
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const finishThoughtTagsEditMode = state => {
  state.isThoughtTagsEditMode = false;

  state.thoughtDraft = initialState.thoughtDraft;
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const addTagToThoughtDraft = (state, action) => {
  const { tag } = action.payload;
  const { thoughtDraft } = state;

  thoughtDraft.tags.push(tag);

  thoughtDraft.tags = orderBy(thoughtDraft.tags, 'text');
};

export const removeTagFromThoughtDraft = (state, action) => {
  const { tag: { id } } = action.payload;
  const { thoughtDraft } = state;

  remove(thoughtDraft.tags, { id });
};
