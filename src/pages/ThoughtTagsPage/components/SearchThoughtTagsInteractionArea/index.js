import React from 'react';

import InteractionRow from '@components/InteractionRow';
import View from '@components/View';

import SearchThoughtTagsInfo from './components/SearchThoughtTagsInfo';
import CancelEditThoughtTagsButton from './components/CancelEditThoughtTagsButton';

import SearchThoughtTagsInput from './components/SearchThoughtTagsInput';
import FinishEditThoughtTagsButton from './components/FinishEditThoughtTagsButton';

import ToggleSearchThoughtTagsOptionsCollapseButton from './components/ToggleSearchThoughtTagsOptionsCollapseButton';

const SearchThoughtTagsInteractionArea = () => (
  <View avoidKeyboard>
    <InteractionRow>
      <SearchThoughtTagsInfo />
      <CancelEditThoughtTagsButton />
    </InteractionRow>

    <InteractionRow>
      <SearchThoughtTagsInput />
      <FinishEditThoughtTagsButton />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <ToggleSearchThoughtTagsOptionsCollapseButton />
      </View>
    </InteractionRow>
  </View>
);

export default SearchThoughtTagsInteractionArea;

