import React from 'react';
import { useSelector } from 'react-redux';

import CreateThoughtInteractionAreaContainer from '@pages/HomePage/containers/CreateThoughtInteractionAreaContainer';
import EditThoughtTextInteractionAreaContainer from '@pages/HomePage/containers/EditThoughtTextInteractionAreaContainer';
import SearchThoughtInteractionAreaContainer from '@pages/HomePage/containers/SearchThoughtInteractionAreaContainer';

import {
  isCreateThoughtModeSelector,
  isEditThoughtTextModeSelector,
  isSearchThoughtModeSelector
} from '@pages/HomePage/slice';

const ThoughtInteractionAreaContainer = () => {
  const isCreateThoughtMode = useSelector(isCreateThoughtModeSelector);
  const isEditThoughtTextMode = useSelector(isEditThoughtTextModeSelector);
  const isSearchThoughtMode = useSelector(isSearchThoughtModeSelector);

  if (isCreateThoughtMode) return <CreateThoughtInteractionAreaContainer />;
  if (isEditThoughtTextMode) return <EditThoughtTextInteractionAreaContainer />;
  if (isSearchThoughtMode) return <SearchThoughtInteractionAreaContainer />;

  return null;
};

export default ThoughtInteractionAreaContainer;
