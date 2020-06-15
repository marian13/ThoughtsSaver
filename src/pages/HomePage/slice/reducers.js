import { toString } from '@utils/strings';

import initialState from './initialState';

export const startCreateThoughtMode = state => {
  state.isCreateThoughtMode = true;
};

export const finishCreateThoughtMode = state => {
  state.isCreateThoughtMode = false;
};

export const startEditThoughtTextMode = state => {
  state.isEditThoughtTextMode = true;
};

export const finishEditThoughtTextMode = state => {
  state.isEditThoughtTextMode = false;
};

export const startSearchThoughtMode = state => {
  state.isSearchThoughtMode = true;
};

export const finishSearchThoughtMode = state => {
  state.isSearchThoughtMode = false;
};

export const resetThoughtInCreateDraft = state => {
  state.thoughtInCreateDraft = initialState.thoughtInCreateDraft;
};

export const changeThoughtInCreateDraftText = (state, action) => {
  const { text } = action.payload;
  const { thoughtInCreateDraft } = state;

  thoughtInCreateDraft.text = text;
};

export const appendEmojiToThoughtInCreateDraftText = (state, action) => {
  const { emoji } = action.payload;
  const { thoughtInCreateDraft } = state;

  thoughtInCreateDraft.text = `${toString(thoughtInCreateDraft.text)}${emoji}`;
};

export const resetThoughtInEditDraft = state => {
  state.thoughtInEditDraft = initialState.thoughtInEditDraft;
};

export const changeThoughtInEditDraftText = (state, action) => {
  const { text } = action.payload;
  const { thoughtInEditDraft } = state;

  thoughtInEditDraft.text = text;
};

export const appendEmojiToThoughtInEditDraftText = (state, action) => {
  const { emoji } = action.payload;
  const { thoughtInEditDraft } = state;

  thoughtInEditDraft.text = `${toString(thoughtInEditDraft.text)}${emoji}`;
};

export const setThoughtInEdit = (state, action) => {
  const { thought } = action.payload;

  state.thoughtInEdit = thought;
};

export const resetThoughtInEdit = state => {
  state.thoughtInEdit = initialState.thoughtInEdit;
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
