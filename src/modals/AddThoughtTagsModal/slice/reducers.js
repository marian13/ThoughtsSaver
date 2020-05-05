import { clone, orderBy, remove } from 'lodash';

import initialState from './initialState';

export const changeThoughtTagsSearchText = (state, action) => {
  const { text } = action.payload;

  state.thoughtTagsSearchText = text;
};

export const changeThoughtTagsSearchResults = (state, action) => {
  const { exactMatchResult, results } = action.payload;

  state.thoughtTagsSearchExactMatchResult = exactMatchResult;
  state.thoughtTagsSearchResults = results;
};

export const setThoughtInEditDraft = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInEditDraft = clone(thought);
};

export const resetThoughtInEditDraft = state => {
  state.thoughtInEditDraft = initialState.thoughtInEditDraft;
};

export const addTagToThoughtInEditDraft = (state, action) => {
  const { tag } = action.payload;
  const { thoughtInEditDraft } = state;

  thoughtInEditDraft.tags.push(tag);

  thoughtInEditDraft.tags = orderBy(thoughtInEditDraft.tags, 'text');
};

export const removeTagFromThoughtInEditDraft = (state, action) => {
  const { tag: { id } } = action.payload;
  const { thoughtInEditDraft } = state;

  remove(thoughtInEditDraft.tags, { id });
};

export const setThoughtInEdit = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInEdit = thought;
};

export const resetThoughtInEdit = state => {
  state.thoughtInEdit = initialState.thoughtInEdit;
};
