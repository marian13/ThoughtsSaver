import { createSelector } from '@reduxjs/toolkit';

const createFocusesModuleSelector = selector => (
  createSelector(state => state.FocusesModule, selector)
);

export const isFocusedSelector = params => createFocusesModuleSelector(state => {
  const key = params;
  const { focuses } = state;

  return focuses[key];
});
