import React from 'react';
import { useSelector } from 'react-redux';

import SaveThoughtInteractionArea from './components/SaveThoughtInteractionArea';
import SearchThoughtInteractionArea from './components/SearchThoughtInteractionArea';

import {
  isCreateThoughtModeSelector,
  isEditThoughtModeSelector,
  isSearchThoughtModeSelector
} from '~/pages/HomePage/slice';

const ThoughtInteractionArea = () => {
  const isCreateThoughtMode = useSelector(isCreateThoughtModeSelector);
  const isEditThoughtMode = useSelector(isEditThoughtModeSelector);
  const isSearchThoughtMode = useSelector(isSearchThoughtModeSelector);

  if (isSearchThoughtMode) return <SearchThoughtInteractionArea />;
  if (isCreateThoughtMode || isEditThoughtMode) return <SaveThoughtInteractionArea />;

  return null;
};

export default ThoughtInteractionArea;
