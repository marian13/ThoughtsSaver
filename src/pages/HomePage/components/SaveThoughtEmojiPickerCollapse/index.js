import React from 'react';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';

import { addEmojiToThought } from '@pages/HomePage/slice';

const SaveThoughtEmojiPickerCollapse = () => <EmojiPickerCollapse addEmojiAction={addEmojiToThought} />;

export default SaveThoughtEmojiPickerCollapse;
