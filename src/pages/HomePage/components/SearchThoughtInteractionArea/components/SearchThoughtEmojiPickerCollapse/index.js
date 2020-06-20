import React from 'react';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';

import addEmojiToSearchThoughtTextThunk from './thunks/addEmojiToSearchThoughtTextThunk';

const SearchThoughtEmojiPickerCollapse = () => <EmojiPickerCollapse addEmojiAction={addEmojiToSearchThoughtTextThunk} />;

export default SearchThoughtEmojiPickerCollapse;
