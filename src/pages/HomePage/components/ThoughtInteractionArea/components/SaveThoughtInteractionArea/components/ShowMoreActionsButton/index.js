import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from '~/components/Icon';
import OverlayMenu from '~/components/OverlayMenu';

import GeneralThoughtMenuOptions from './components/GeneralThoughtMenuOptions';

import { isVisibleSelector, show, hide } from '~/modules/VisibilitiesModule/slice';

import { GENERAL_THOUGHT_OPTIONS_BUTTON, GENERAL_THOUGHT_OPTIONS_MENU } from '~/pages/HomePage/constants/identifiers';

const ShowMoreActionsButton = () => {
  const dispatch = useDispatch();

  const isMenuVisible = useSelector(isVisibleSelector(GENERAL_THOUGHT_OPTIONS_MENU));

  const handleButtonPress = () => dispatch(show(GENERAL_THOUGHT_OPTIONS_MENU));
  const handleBackdropPress = () => dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));

  return (
    <OverlayMenu
      isVisible={isMenuVisible}
      onContentPress={handleButtonPress}
      onBackdropPress={handleBackdropPress}
      renderContent={() => <Icon testID={GENERAL_THOUGHT_OPTIONS_BUTTON} name="more-vert" />}
      renderOptions={() => <GeneralThoughtMenuOptions />}
      height={100}
      width="55%"
    />
  );
};

export default ShowMoreActionsButton;
