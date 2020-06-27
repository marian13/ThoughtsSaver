import { clone, orderBy, remove } from 'lodash';

import initialState from './initialState';

export const setThought = (state, action) => {
  const { thought } = action.payload;

  state.thought = clone(thought);
};

export const addTagToThought = (state, action) => {
  const { tag } = action.payload;
  const { thought } = state;

  thought.tags.push(tag);

  thought.tags = orderBy(thought.tags, 'text');
};

export const removeTagFromThought = (state, action) => {
  const { tag: { id } } = action.payload;
  const { thought } = state;

  remove(thought.tags, { id });
};

export const setThoughtInEdit = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInEdit = thought;
};

export const changeSearchThoughtTagsText = (state, action) => {
  const { text } = action.payload;

  state.searchThoughtTagsText = text;
};

export const changeSearchThoughtTagsResults = (state, action) => {
  const { exactMatchResult, results } = action.payload;

  state.searchThoughtTagsExactMatchResult = exactMatchResult;
  state.searchThoughtTagsResults = results;
};

export const resetThought = state => {
  state.thought = initialState.thought;
};

export const resetThoughtInEdit = state => {
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const resetSearchThoughtTagsText = state => {
  state.searchThoughtTagsText = initialState.searchThoughtTagsText;
};

export const resetSearchThoughtTagsResults = state => {
  state.searchThoughtTagsExactMatchResult = initialState.searchThoughtTagsExactMatchResult;
  state.searchThoughtTagsResults = initialState.searchThoughtTagsResults;
};
