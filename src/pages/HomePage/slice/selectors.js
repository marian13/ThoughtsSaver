import { createSelector } from '@reduxjs/toolkit';

import {
  SEARCH_THOUGHT_BY_TEXT_OPTION,
  SEARCH_THOUGHT_BY_TAG_OPTION,
  SEARCH_THOUGHT_FUZZY_OPTION
} from '@pages/HomePage/constants/identifiers';

import { has } from '@utils/arrays';

const createHomePageSelector = selector => (
  createSelector(state => state.HomePage, selector)
);

export const thoughtSelector = createHomePageSelector(state => state.thought);
export const thoughtIdSelector = createHomePageSelector(state => state.thought.id);
export const thoughtTextSelector = createHomePageSelector(state => state.thought.text);

export const isCreateThoughtModeSelector = createHomePageSelector(state => state.isCreateThoughtMode);
export const thoughtInCreateSelector = createHomePageSelector(state => state.thoughtInCreate);

export const isEditThoughtModeSelector = createHomePageSelector(state => state.isEditThoughtMode);
export const thoughtInEditSelector = createHomePageSelector(state => state.thoughtInEdit);
export const thoughtInEditIdSelector = createHomePageSelector(state => state.thoughtInEdit.id);
export const thoughtInEditTextSelector = createHomePageSelector(state => state.thoughtInEdit.text);

export const isSearchThoughtModeSelector = createHomePageSelector(state => state.isSearchThoughtMode);

export const isSearchThoughtByTextOptionSelectedSelector = createHomePageSelector(state => (
  has(state.searchThoughtOptions, SEARCH_THOUGHT_BY_TEXT_OPTION)
));
export const isSearchThoughtByTagOptionSelectedSelector = createHomePageSelector(state => (
  has(state.searchThoughtOptions, SEARCH_THOUGHT_BY_TAG_OPTION)
));
export const isSearchThoughtFuzzyOptionSelectedSelector = createHomePageSelector(state => (
  has(state.searchThoughtOptions, SEARCH_THOUGHT_FUZZY_OPTION)
));

export const searchThoughtInputTextSelector = createHomePageSelector(state => state.searchThoughtInputText);
export const searchThoughtResultsSelector = createHomePageSelector(state => state.searchThoughtResults);
export const searchThoughtOptionsSelector = createHomePageSelector(state => state.searchThoughtOptions);

