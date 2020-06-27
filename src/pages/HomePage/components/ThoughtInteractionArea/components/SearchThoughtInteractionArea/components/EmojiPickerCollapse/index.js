import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import EmojiPicker from '@components/EmojiPicker';

import { isVisibleSelector } from '@modules/VisibilitiesModule/slice';

import addEmojiToSearchTextThunk from './thunks/addEmojiToSearchTextThunk';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const SearchThoughtEmojiPickerCollapse = () => {
  const dispatch = useDispatch();

  const isCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const handlePick = emoji => dispatch(addEmojiToSearchTextThunk({ emoji }));

  return (
    <InteractionRow testID={EMOJI_PICKER_COLLAPSE} isVisible={isCollapseVisible}>
      <EmojiPicker onPick={handlePick} />
    </InteractionRow>
  );
};

export default SearchThoughtEmojiPickerCollapse;
