import React from 'react';

import ThoughtContent from './ThoughtContent';

import OverlayMenu from '@components/OverlayMenu';

const renderContent = ({ thought }) => <ThoughtContent {...thought} />;
const renderOptions = ({ ThoughtMenuOptionsContainer, thought, ...rest }) => (
  <ThoughtMenuOptionsContainer {...rest} thought={thought} />
);

const Thought = ({
  isMenuVisible,
  onContentPress,
  onMenuBackdropPress,
  ...rest
}) => {
  return (
    <OverlayMenu
      {...rest}
      isVisible={isMenuVisible}
      onContentPress={onContentPress}
      onBackdropPress={onMenuBackdropPress}
      renderContent={() => renderContent(rest)}
      renderOptions={() => renderOptions(rest)}
      height={100}
    />
  );
};

export default Thought;
