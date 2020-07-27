import { createSelector } from '@reduxjs/toolkit';

import { find } from 'lodash';

const createTagsModuleSelector = selector => (
  createSelector(state => state.TagsModule, selector)
);

export const tagSeletor = params => createTagsModuleSelector(state => {
  const { id } = params;
  const { tags } = state;

  return find(tags, { id });
});

export const tagsSelector = createTagsModuleSelector(state => {
  const { tags } = state;

  return tags;
});
