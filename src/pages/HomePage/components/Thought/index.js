import React from 'react';

import ThoughtContent from './ThoughtContent';

import OverlayMenu from '@components/OverlayMenu';

const Thought = ({
  isMenuVisible,
  thought,
  onContentPress,
  onMenuBackdropPress,
  ThoughtMenuOptionsContainer
}) => (
  <OverlayMenu
    isVisible={isMenuVisible}
    onContentPress={onContentPress}
    onBackdropPress={onMenuBackdropPress}
    renderContent={() => <ThoughtContent {...thought} />}
    renderOptions={() => <ThoughtMenuOptionsContainer thought={thought} />}
    height={100}
  />
);

export default Thought;

