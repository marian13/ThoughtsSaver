import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '~/components/IconButton';

import { isVisibleSelector, show, hide } from '~/modules/VisibilitiesModule/slice';

import { EMOJI_PICKER_COLLAPSE, TOGGLE_EMOJI_PICKER_COLLAPSE_BUTTON } from '~/pages/HomePage/constants/identifiers';

import { ifProp } from '~/utils/props';

const ToggleEmojiPickerCollapseButton = () => {
  const dispatch = useDispatch();

  const isCollapseVisible = useSelector(isVisibleSelector(EMOJI_PICKER_COLLAPSE));

  const handleButtonPress = () => (
    isCollapseVisible ? dispatch(hide(EMOJI_PICKER_COLLAPSE)) : dispatch(show(EMOJI_PICKER_COLLAPSE))
  );

  return (
    <IconButton
      testID={TOGGLE_EMOJI_PICKER_COLLAPSE_BUTTON}
      iconName="tag-faces"
      onPress={handleButtonPress}
      {...ifProp(isCollapseVisible && { style: { transform: [{ rotate: '180deg'}] } })}
    />
  );
};

export default ToggleEmojiPickerCollapseButton;
