import { createSelector } from '@reduxjs/toolkit';

const createHomePageSelector = selector => (
  createSelector(state => state.HomePage, selector)
);

export const isCreateThoughtModeSelector = createHomePageSelector(state => {
  const { isCreateThoughtMode } = state;

  return isCreateThoughtMode;
});

export const isEditThoughtTextModeSelector = createHomePageSelector(state => {
  const { isEditThoughtTextMode } = state;

  return isEditThoughtTextMode;
});

export const isSearchThoughtByTextModeSelector = createHomePageSelector(state => {
  const { isSearchThoughtByTextMode } = state;

  return isSearchThoughtByTextMode;
});

export const isSearchThoughtModeSelector = createHomePageSelector(state => {
  const { isSearchThoughtByTextMode } = state;

  return isSearchThoughtByTextMode;
});

export const thoughtInCreateDraftTextSelector = createHomePageSelector(state => {
  const { thoughtInCreateDraft } = state;

  return thoughtInCreateDraft.text;
});

export const thoughtInEditDraftTextSelector = createHomePageSelector(state => {
  const { thoughtInEditDraft } = state;

  return thoughtInEditDraft.text;
});

export const thoughtInEditIdSelector = createHomePageSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.id;
});

export const thoughtInEditTextSelector = createHomePageSelector(state => {
  const { thoughtInEdit } = state;

  return thoughtInEdit.text;
});

export const searchThoughtInputTextSelector = createHomePageSelector(state => {
  const { searchThoughtInputText } = state;

  return searchThoughtInputText;
});
