import React from 'react';
import { useSelector } from 'react-redux';

import SaveThoughtInteractionArea from '@pages/HomePage/components/SaveThoughtInteractionArea';
import SearchThoughtInteractionArea from '@pages/HomePage/components/SearchThoughtInteractionArea';

import {
  isCreateThoughtModeSelector,
  isEditThoughtModeSelector,
  isSearchThoughtModeSelector
} from '@pages/HomePage/slice';

const ThoughtInteractionArea = () => {
  const isCreateThoughtMode = useSelector(isCreateThoughtModeSelector);
  const isEditThoughtMode = useSelector(isEditThoughtModeSelector);
  const isSearchThoughtMode = useSelector(isSearchThoughtModeSelector);

  if (isCreateThoughtMode || isEditThoughtMode) return <SaveThoughtInteractionArea />;
  if (isSearchThoughtMode) return <SearchThoughtInteractionArea />;

  return null;
};

export default ThoughtInteractionArea;
