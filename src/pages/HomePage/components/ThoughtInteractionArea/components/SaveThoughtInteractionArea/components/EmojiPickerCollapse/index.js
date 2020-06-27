import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import EmojiPicker from '@components/EmojiPicker';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';
import { addEmojiToThought } from '@pages/HomePage/slice';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const EmojiPickerCollapse = () => {
  const dispatch = useDispatch();

  const isCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const handlePick = emoji => dispatch(addEmojiToThought({ emoji }));

  return (
    <InteractionRow testID={EMOJI_PICKER_COLLAPSE} isVisible={isCollapseVisible}>
      <EmojiPicker onPick={handlePick} />
    </InteractionRow>
  );
};

export default EmojiPickerCollapse;
