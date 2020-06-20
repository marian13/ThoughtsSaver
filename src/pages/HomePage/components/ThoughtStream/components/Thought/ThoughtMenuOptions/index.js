import React from 'react';
import { useDispatch } from 'react-redux';

import OverlayMenuOption from '@components/OverlayMenuOption';

import startEditThoughtTagsThunk from '@pages/HomePage/thunks/startEditThoughtTagsThunk';

import editThoughtThunk from './thunks/editThoughtThunk';

const ThoughtMenuOptions = ({ thought }) => {
  const dispatch = useDispatch();

  const handleEditOptionPress = () => dispatch(editThoughtThunk({ thought }));
  const handleAddTagsPress = () => dispatch(startEditThoughtTagsThunk({ thought }));

  return (
    <>
      <OverlayMenuOption
        iconName="playlist-edit"
        iconType="material-community"
        text="Edit"
        onPress={handleEditOptionPress}
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
