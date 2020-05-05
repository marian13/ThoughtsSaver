import React from 'react';
import { useSelector } from 'react-redux';

import CreateThoughtInteractionAreaContainer from '@pages/HomePage/containers/CreateThoughtInteractionAreaContainer';
import EditThoughtTextInteractionAreaContainer from '@pages/HomePage/containers/EditThoughtTextInteractionAreaContainer';

import { isCreateThoughtModeSelector, isEditThoughtTextModeSelector } from '@pages/HomePage/slice';

const ThoughtInteractionAreaContainer = () => {
  const isCreateThoughtMode = useSelector(isCreateThoughtModeSelector);
  const isEditThoughtTextMode = useSelector(isEditThoughtTextModeSelector);

  if (isCreateThoughtMode) return <CreateThoughtInteractionAreaContainer />;
  if (isEditThoughtTextMode) return <EditThoughtTextInteractionAreaContainer />;

  return null;
};

export default ThoughtInteractionAreaContainer;
