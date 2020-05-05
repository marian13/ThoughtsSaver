import { createSelector } from '@reduxjs/toolkit';

const createVisibilitiesModuleSelector = selector => (
  createSelector(state => state.VisibilitiesModule, selector)
);

export const isVisibleSelector = params => createVisibilitiesModuleSelector(state => {
  const key = params;
  const { visibilities } = state;

  return visibilities[key];
});
