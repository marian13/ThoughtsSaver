import { createSelector } from '@reduxjs/toolkit';

import { toBool } from '@utils/booleans';

const createFocusesModuleSelector = selector => (
  createSelector(state => state.FocusesModule, selector)
);

export const isFocusedSelector = params => createFocusesModuleSelector(state => {
  const key = params;
  const { focuses } = state;

  return toBool(focuses[key]);
});
