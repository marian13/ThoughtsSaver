import React from 'react';
import { useDispatch } from 'react-redux';

import OverlayMenuOption from '@components/OverlayMenuOption';

import startEditThoughtTextThunk from '@pages/HomePage/thunks/startEditThoughtTextThunk';
import startEditThoughtTagsThunk from '@pages/HomePage/thunks/startEditThoughtTagsThunk';

const ThoughtMenuOptions = ({ thought }) => {
  const dispatch = useDispatch();

  const handleEditTextPress = () => dispatch(startEditThoughtTextThunk({ thought }));
  const handleAddTagsPress = () => dispatch(startEditThoughtTagsThunk({ thought }));

  return (
    <>
      <OverlayMenuOption
        iconName="playlist-edit"
        iconType="material-community"
        text="Edit Text"
        onPress={handleEditTextPress}
      />

      <OverlayMenuOption
        iconName="tag-plus"
        iconType="material-community"
        text="Add Tags"
        onPress={handleAddTagsPress}
      />
    </>
  );
};

export default ThoughtMenuOptions;
