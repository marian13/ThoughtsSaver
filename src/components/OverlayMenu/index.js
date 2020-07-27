import React, { useState } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  ViewPropTypes,
  useWindowDimensions
} from 'react-native';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import Menu from './Menu';

import { percentStringToNumber, isPercentString } from '@utils/percents';
import { toBool } from '@utils/booleans';

const calculateMenuWidth = (defaultMenu, window) => {
  if (isPercentString(defaultMenu.width)) {
    return percentStringToNumber(defaultMenu.width) * (window.width / 100);
  }

  if (defaultMenu.width) return defaultMenu.width;

  return window.width / 2;
};

const calculateMenuHeight = (defaultMenu, window) => {
  if (isPercentString(defaultMenu.height)) {
    return percentStringToNumber(defaultMenu.height) * (window.height / 100);
  }

  if (defaultMenu.height) return defaultMenu.height;

  return window.height / 2;
};

const calculateMenuStyle = (isVisible, defaultMenu, window) => {
  if (!isVisible) return {};

  return {
    width: calculateMenuWidth(defaultMenu, window),
    height: calculateMenuHeight(defaultMenu, window)
  };
};

const calculateLeft = (menu, window, page) => {
  const breakingX = window.width - menu.width + 40;

  if (page.x < breakingX) return 0;

  return page.x - breakingX;
};

const calculateTop = (menu, window, page) => {
  const breakingY = window.height - menu.height;

  if (page.y < 50) return 0;

  if (page.y > breakingY) {
    if (page.y - breakingY < 50) return breakingY - 50;

    return breakingY;
  }

  return page.y - 50;
};

const calculateLocationStyle = (isVisible, menu, window, page) => {
  if (!isVisible) return {};

  return {
    left: calculateLeft(menu, window, page),
    top: calculateTop(menu, window, page)
  };
};

const OverlayMenu = ({
  isVisible,
  onContentPress,
  onBackdropPress,
  renderContent,
  renderOptions,
  width,
  height,
  style,
  contentContainerStyle,
  backdropStyle
}) => {
  const [page, setPage] = useState({});
  const window = useWindowDimensions();

  const handleTouchablePress = event => {
    setPage({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });

    onContentPress();
  };

  const menuStyle = calculateMenuStyle(isVisible, { width, height }, window);
  const locationStyle = calculateLocationStyle(isVisible, menuStyle, window, page);

  return (
    <>
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View style={contentContainerStyle}>
          {renderContent()}
        </View>
      </TouchableWithoutFeedback>

      {/*
        HACK
        toBool(isVisible) is nessary here,
        because Modal `visible` prop treats `null` truthy value.
      */}
      <Modal visible={toBool(isVisible)} onRequestClose={onBackdropPress} transparent>
        <Backdrop onPress={onBackdropPress} style={backdropStyle} />

        <Menu style={[style, menuStyle, locationStyle]} renderOptions={renderOptions} />
      </Modal>
    </>
  );
};

OverlayMenu.propTypes = {
  isVisible: PropTypes.bool,
  onContentPress: PropTypes.func,
  onBackdropPress: PropTypes.func,
  renderContent: PropTypes.func,
  renderOptions: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  backdropStyle: ViewPropTypes.style
};

OverlayMenu.defaultTypes = {
  isVisible: false,
  onContentPress: () => {},
  onBackdropPress: () => {},
  renderContent: () => {},
  renderOptions: () => {},
  width: 0,
  height: 0,
  style: {},
  contentContainerStyle: {},
  backdropStyle: {}
};

export default OverlayMenu;
