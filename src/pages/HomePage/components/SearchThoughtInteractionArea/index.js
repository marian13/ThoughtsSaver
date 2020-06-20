import React from 'react';

import InteractionRow from '@components/InteractionRow';
import View from '@components/View';

import ToggleEmojiPickerCollapseButton from '@pages/HomePage/components/ToggleEmojiPickerCollapseButton';

import SearchThoughtInfo from './components/SearchThoughtInfo';
import CancelSearchThoughtButton from './components/CancelSearchThoughtButton';

import SearchThoughtInput from './components/SearchThoughtInput';
import FinishSearchThoughtButton from './components/FinishSearchThoughtButton';

import ToggleSearchThoughtOptionsCollapseButton from './components/ToggleSearchThoughtOptionsCollapseButton';

import SearchThoughtOptionsCollapse from './components/SearchThoughtOptionsCollapse';
import SearchThoughtEmojiPickerCollapse from './components/SearchThoughtEmojiPickerCollapse';

const SearchThoughtInteractionArea = () => (
  <View avoidKeyboard>
    <InteractionRow>
      <SearchThoughtInfo />
      <CancelSearchThoughtButton />
    </InteractionRow>

    <InteractionRow>
      <SearchThoughtInput />
      <FinishSearchThoughtButton />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <ToggleSearchThoughtOptionsCollapseButton />
        <ToggleEmojiPickerCollapseButton />
      </View>
    </InteractionRow>

    <SearchThoughtOptionsCollapse />
    <SearchThoughtEmojiPickerCollapse />
  </View>
);

export default SearchThoughtInteractionArea;
