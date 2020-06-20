import React from 'react';

import EmojiPickerCollapse from '@pages/HomePage/components/ThoughtInteractionArea/components/EmojiPickerCollapse';

import addEmojiToSearchThoughtTextThunk from './thunks/addEmojiToSearchThoughtTextThunk';

const SearchThoughtEmojiPickerCollapse = () => <EmojiPickerCollapse addEmojiAction={addEmojiToSearchThoughtTextThunk} />;

export default SearchThoughtEmojiPickerCollapse;
