import React from 'react';

import OverlayMenuOption from '@components/OverlayMenuOption';

const ThoughtMenuOptions = ({ onEditTextPress, onAddTagsPress }) => (
  <>
    <OverlayMenuOption
      iconName="playlist-edit"
      iconType="material-community"
      text="Edit Text"
      onPress={onEditTextPress}
    />

    <OverlayMenuOption
      iconName="tag-plus"
      iconType="material-community"
      text="Add Tags"
      onPress={onAddTagsPress}
    />
  </>
);

export default ThoughtMenuOptions;
