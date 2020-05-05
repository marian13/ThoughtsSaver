import React from 'react';
import { useSelector } from 'react-redux';

import ThoughtStream from '@pages/HomePage/components/ThoughtStream';

import ThoughtContainer from '@pages/HomePage/containers/ThoughtContainer';

import { thoughtsSelector } from '@modules/ThoughtsModule/slice';

const ThoughtStreamContainer = () => {
  const thoughts = useSelector(thoughtsSelector);

  return (
    <ThoughtStream
      thoughts={thoughts}
      ThoughtContainer={ThoughtContainer}
    />
  );
};

export default ThoughtStreamContainer;
