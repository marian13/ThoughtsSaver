import React from 'react';

import ThoughtMenuOption from './ThoughtMenuOption';

const ThoughtMenuOptions = ({ onEditTextPress, onAddTagsPress, ...rest }) => (
  <>
    <ThoughtMenuOption
      {...rest}
      iconName="edit"
      iconType="material"
      text="Edit Text"
      onPress={onEditTextPress}
    />

    <ThoughtMenuOption
      {...rest}
      iconName="pound"
      iconType="material-community"
      text="Add Tags"
      onPress={onAddTagsPress}
    />
  </>
);

export default ThoughtMenuOptions;
