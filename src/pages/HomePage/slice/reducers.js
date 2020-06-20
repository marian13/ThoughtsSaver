import { toString } from '@utils/strings';

import initialState from './initialState';

export const setThought = (state, action) => {
  const { thought } = action.payload;

  state.thought = thought;
};

export const resetThought = state => {
  state.thought = initialState.thought;
};

export const changeThoughtText = (state, action) => {
  const { text } = action.payload;
  const { thought } = state;

  thought.text = text;
};

export const startCreateThoughtMode = state => {
  state.isCreateThoughtMode = true;
};

export const finishCreateThoughtMode = state => {
  state.isCreateThoughtMode = false;
};

export const setThoughtInCreate = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInCreate = thought;
};

export const startEditThoughtMode = state => {
  state.isEditThoughtMode = true;
};

export const finishEditThoughtMode = state => {
  state.isEditThoughtMode = false;
};

export const setThoughtInEdit = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInEdit = thought;
};

export const resetThoughtInEdit = state => {
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const startSearchThoughtMode = state => {
  state.isSearchThoughtMode = true;
};

export const finishSearchThoughtMode = state => {
  state.isSearchThoughtMode = false;
};

export const changeSearchThoughtInputText = (state, action) => {
  const { text } = action.payload;

  state.searchThoughtInputText = text;
};

export const appendEmojiToSearchThoughtInputText = (state, action) => {
  const { emoji } = action.payload;

  state.searchThoughtInputText = `${toString(state.searchThoughtInputText)}${emoji}`;
};

export const changeSearchThoughtResults = (state, action) => {
  const { results } = action.payload;

  state.searchThoughtResults = results;
};

export const changeSearchThoughtOptions = (state, action) => {
  const { options } = action.payload;

  state.searchThoughtOptions = options;
};
