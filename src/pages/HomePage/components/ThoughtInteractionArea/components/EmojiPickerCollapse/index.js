import React from 'react';
import { useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';

import AddEmojiPicker from './components/AddEmojiPicker';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const EmojiPickerCollapse = ({ addEmojiAction }) => {
  const isCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  return (
    <InteractionRow testID={EMOJI_PICKER_COLLAPSE} isVisible={isCollapseVisible}>
      <AddEmojiPicker addEmojiAction={addEmojiAction} />
    </InteractionRow>
  );
};

export default EmojiPickerCollapse;
