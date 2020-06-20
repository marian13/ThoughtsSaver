import React from 'react';
import { useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';

import AddEmojiToThoughtPicker from '@pages/HomePage/components/AddEmojiToThoughtPicker';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const EmojiPickerCollapse = () => {
  const isCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  return (
    <InteractionRow testID={EMOJI_PICKER_COLLAPSE} isVisible={isCollapseVisible}>
      <AddEmojiToThoughtPicker />
    </InteractionRow>
  );
};

export default EmojiPickerCollapse;
