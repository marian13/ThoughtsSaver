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
