import React from 'react';
import { useSelector } from 'react-redux';

import ThoughtStream from '@pages/HomePage/components/ThoughtStream';

import ThoughtContainer from '@pages/HomePage/containers/ThoughtContainer';

import { thoughtsSelector } from '@modules/ThoughtsModule/slice';

import {
  isSearchThoughtModeSelector,
  searchThoughtInputTextSelector,

  searchThoughtResultsSelector
} from '@pages/HomePage/slice';

import { THOUGHT_STREAM } from '@pages/HomePage/constants/identifiers';

const ThoughtStreamContainer = () => {
  const isSearchThoughtMode = useSelector(isSearchThoughtModeSelector);
  const searchThoughtInputText = useSelector(searchThoughtInputTextSelector);

  const thoughts = useSelector(thoughtsSelector);
  const searchThoughtResults = useSelector(searchThoughtResultsSelector);

  return (
    <ThoughtStream
      testID={THOUGHT_STREAM}
      thoughts={isSearchThoughtMode && searchThoughtInputText ? searchThoughtResults : thoughts}
      ThoughtContainer={ThoughtContainer}
    />
  );
};

export default ThoughtStreamContainer;
