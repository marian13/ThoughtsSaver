import React from 'react';

import IconButton from '@components/IconButton';

import { TOGGLE_EMOJI_PICKER_BUTTON } from '@pages/HomePage/constants/identifiers';

import { ifProp } from '@utils/props';

const ToggleEmojiPickerCollapseButton = ({
  isEmojiPickerCollapseVisible,
  onShowPress,
  onHidePress
}) => (
  <IconButton
    testID={TOGGLE_EMOJI_PICKER_BUTTON}
    iconName="tag-faces"
    onPress={() => isEmojiPickerCollapseVisible ? onHidePress() : onShowPress()}
    {...ifProp(isEmojiPickerCollapseVisible && { style: { transform: [{ rotate: '180deg'}] } })}
  />
);

export default ToggleEmojiPickerCollapseButton;
