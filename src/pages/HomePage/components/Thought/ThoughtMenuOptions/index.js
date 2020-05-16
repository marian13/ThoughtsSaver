import React from 'react';

import OverlayMenuOption from '@components/OverlayMenuOption';

const ThoughtMenuOptions = ({ onEditTextPress, onAddTagsPress }) => (
  <>
    <OverlayMenuOption
      iconName="edit"
      text="Edit Text"
      onPress={onEditTextPress}
    />

    <OverlayMenuOption
      iconName="pound"
      iconType="material-community"
      text="Add Tags"
      onPress={onAddTagsPress}
    />
  </>
);

export default ThoughtMenuOptions;
