import React from 'react';
import { useSelector } from 'react-redux';

import CreateThoughtInteractionArea from '@pages/HomePage/components/CreateThoughtInteractionArea';
import EditThoughtTextInteractionArea from '@pages/HomePage/components/EditThoughtTextInteractionArea';
import SearchThoughtInteractionArea from '@pages/HomePage/components/SearchThoughtInteractionArea';

import {
  isCreateThoughtModeSelector,
  isEditThoughtTextModeSelector,
  isSearchThoughtModeSelector
} from '@pages/HomePage/slice';

const ThoughtInteractionArea = () => {
  const isCreateThoughtMode = useSelector(isCreateThoughtModeSelector);
  const isEditThoughtTextMode = useSelector(isEditThoughtTextModeSelector);
  const isSearchThoughtMode = useSelector(isSearchThoughtModeSelector);

  if (isCreateThoughtMode) return <CreateThoughtInteractionArea />;
  if (isEditThoughtTextMode) return <EditThoughtTextInteractionArea />;
  if (isSearchThoughtMode) return <SearchThoughtInteractionArea />;

  return null;
};

export default ThoughtInteractionArea;
