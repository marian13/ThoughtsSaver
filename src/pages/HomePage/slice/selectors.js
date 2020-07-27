import { createSelector } from '@reduxjs/toolkit';

const createHomePageSelector = selector => (
  createSelector(state => state.HomePage, selector)
);

export const isThoughtTextInputFocusedSelector = createHomePageSelector(state => {
  const { focusThoughtTextInput } = state;

  return focusThoughtTextInput;
});

export const isThougthTextEditModeSelector = createHomePageSelector(state => {
  const { isThoughtTextEditMode } = state;

  return isThoughtTextEditMode;
});

export const isThoughtMenuVisibleSelector = params => createHomePageSelector(state => {
  const { id } = params;
  const { menuVisibilities } = state;

  return menuVisibilities[id];
});

export const isAddThoughtTagsModalVisibleSelector = createHomePageSelector(state => {
  const { showAddThoughtTagsModal } = state;

  return showAddThoughtTagsModal;
});

export const thoughtDraftTextSelector = createHomePageSelector(state => {
  const { thoughtDraft } = state;

  return thoughtDraft.text;
});

export const thoughtInEditIdSelector = createHomePageSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.id;
});

export const thoughtInEditTextSelector = createHomePageSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.text;
});
