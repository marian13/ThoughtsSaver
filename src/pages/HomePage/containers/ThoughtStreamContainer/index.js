import React from 'react';
import { useSelector } from 'react-redux';

import ThoughtStream from '@pages/HomePage/components/ThoughtStream';

import ThoughtContainer from '@pages/HomePage/containers/ThoughtContainer';

import { thoughtsSelector } from '@modules/ThoughtsModule/slice';

import { THOUGHT_STREAM } from '@pages/HomePage/constants/identifiers';

const ThoughtStreamContainer = () => {
  const thoughts = useSelector(thoughtsSelector);

  return (
    <ThoughtStream
      testID={THOUGHT_STREAM}
      thoughts={thoughts}
      ThoughtContainer={ThoughtContainer}
    />
  );
};

export default ThoughtStreamContainer;
