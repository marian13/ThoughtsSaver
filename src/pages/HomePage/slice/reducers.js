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

export const resetThoughtInEditDraft = state => {
  state.thoughtInEditDraft = initialState.thoughtInEditDraft;
};

export const changeThoughtInEditDraftText = (state, action) => {
  const { text } = action.payload;
  const { thoughtInEditDraft } = state;

  thoughtInEditDraft.text = text;
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

export const changeSearchThoughtResults = (state, action) => {
  const { results } = action.payload;

  state.searchThoughtResults = results;
};
