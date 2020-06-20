import React from 'react';
import { useDispatch } from 'react-redux';

import EmojiPicker from '@components/EmojiPicker';

import { addEmojiToCurrentThought } from '@pages/HomePage/slice';

const AddEmojiToThoughtPicker = () => {
  const dispatch = useDispatch();

  const handlePick = emoji => dispatch(addEmojiToCurrentThought({ emoji }));

  return <EmojiPicker onPick={handlePick} />;
};

export default AddEmojiToThoughtPicker;
