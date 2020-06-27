import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import OverlayMenuOption from '@components/OverlayMenuOption';

import { hide } from '@modules/VisibilitiesModule/slice';

import editThoughtThunk from './thunks/editThoughtThunk';

import { getThoughtMenuID } from '@pages/HomePage/constants/identifiers';
import { THOUGHT_TAGS_PAGE } from '@pages/ThoughtTagsPage/constants/identifiers';

const ThoughtMenuOptions = ({ thought }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleEditOptionPress = () => dispatch(editThoughtThunk({ thought }));

  const handleAddTagsOptionPress = () => {
    dispatch(hide(getThoughtMenuID(thought)));

    navigate(THOUGHT_TAGS_PAGE, { thoughtId: thought.id });
  };

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
        onPress={handleAddTagsOptionPress}
      />
    </>
  );
};

export default ThoughtMenuOptions;
