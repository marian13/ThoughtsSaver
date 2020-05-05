import React from 'react';
import { useDispatch } from 'react-redux';

import ThoughtMenuOptions from '@pages/HomePage/components/Thought/ThoughtMenuOptions';

import startEditThoughtTextThunk from '@pages/HomePage/thunks/startEditThoughtTextThunk';
import startEditThoughtTagsThunk from '@pages/HomePage/thunks/startEditThoughtTagsThunk';

const ThoughtMenuOptionsContainer = ({ thought }) => {
  const dispatch = useDispatch();

  const handleEditTextPress = () => dispatch(startEditThoughtTextThunk({ thought }));
  const handleAddTagsPress = () => dispatch(startEditThoughtTagsThunk({ thought }));

  return (
    <ThoughtMenuOptions
      onEditTextPress={handleEditTextPress}
      onAddTagsPress={handleAddTagsPress}
    />
  );
};

export default ThoughtMenuOptionsContainer;
