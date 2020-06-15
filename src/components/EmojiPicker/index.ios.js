import React from 'react';

import { NimblePicker } from 'emoji-mart-native';

import data from 'emoji-mart-native/data/apple.json';
import dataRequires from 'emoji-mart-native/data/local-images/apple';

const { emojis: localEmojis } = dataRequires;

const EmojiPicker = ({ onPick }) => (
  <NimblePicker
    set='apple'
    data={data}
    useLocalImages={localEmojis}
    onSelect={emoji => onPick(emoji.native)}
  />
);

export default EmojiPicker;
