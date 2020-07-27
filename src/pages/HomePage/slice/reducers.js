import { clone } from 'lodash';

import initialState from './initialState';

export const resetThoughtDraft = state => {
  state.thoughtDraft = initialState.thoughtDraft;
};

export const focusThoughtTextInput = state => {
  state.focusThoughtTextInput = true;
};

export const blurThoughtTextInput = state => {
  state.focusThoughtTextInput = false;
};

export const changeThoughtDraftText = (state, action) => {
  const { text } = action.payload;
  const { thoughtDraft } = state;

  thoughtDraft.text = text;
};

export const startThoughtTextEditMode = (state, action) => {
  const { thought } = action.payload;

  state.isThoughtTextEditMode = true;

  state.thoughtDraft = clone(thought);
  state.thoughtInEdit = thought;
};

export const cancelThoughtTextEditMode = state => {
  state.isThoughtTextEditMode = false;

  state.thoughtDraft = initialState.thoughtDraft;
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const finishThoughtTextEditMode = state => {
  state.isThoughtTextEditMode = false;

  state.thoughtDraft = initialState.thoughtDraft;
  state.thoughtInEdit = initialState.thoughtInEdit;
};

export const showThoughtMenu = (state, action) => {
  const { id } = action.payload;

  state.menuVisibilities[id] = true;
};

export const hideThoughtMenu = (state, action) => {
  const { id } = action.payload;

  state.menuVisibilities[id] = false;
};
