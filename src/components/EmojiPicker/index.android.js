import React from 'react';

import { NimblePicker } from 'emoji-mart-native';

import data from 'emoji-mart-native/data/google.json';
import dataRequires from 'emoji-mart-native/data/local-images/google';

const { emojis: localEmojis } = dataRequires;

const EmojiPicker = ({ onPick }) => (
  <NimblePicker
    set='google'
    data={data}
    useLocalImages={localEmojis}
    onSelect={emoji => onPick(emoji.native)}
  />
);

export default EmojiPicker;
