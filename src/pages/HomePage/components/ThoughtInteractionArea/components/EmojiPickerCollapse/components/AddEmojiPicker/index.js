import React from 'react';
import { useDispatch } from 'react-redux';

import EmojiPicker from '@components/EmojiPicker';

const AddEmojiPicker = ({ addEmojiAction }) => {
  const dispatch = useDispatch();

  const handlePick = emoji => dispatch(addEmojiAction({ emoji }));

  return <EmojiPicker onPick={handlePick} />;
};

export default AddEmojiPicker;
