import { createSelector } from '@reduxjs/toolkit';

import { toBool } from '~/utils/booleans';

const createVisibilitiesModuleSelector = selector => (
  createSelector(state => state.VisibilitiesModule, selector)
);

export const isVisibleSelector = params => createVisibilitiesModuleSelector(state => {
  const key = params;
  const { visibilities } = state;

  return toBool(visibilities[key]);
});
