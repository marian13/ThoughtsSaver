import { createSelector } from '@reduxjs/toolkit';

const createThoughtsModuleSelector = selector => (
  createSelector(state => state.ThoughtsModule, selector)
);

export const thoughtsSelector = createThoughtsModuleSelector(state => {
  const { thoughts } = state;

  return thoughts;
});
