import { createSelector } from '@reduxjs/toolkit';

const createThoughtsModuleSelector = selector => (
  createSelector(state => state.ThoughtsModule, selector)
);

export const thoughtsSelector = createThoughtsModuleSelector(state => state.thoughts);

export const thoughtByIdSelector = thoughtId => createThoughtsModuleSelector(state => (
  state.thoughts.find(thought => thought.id === thoughtId)
));
