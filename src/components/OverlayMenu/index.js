import React, { useState } from 'react';
import { Modal, useWindowDimensions } from 'react-native';

import { Dimensions } from 'react-native';

import Backdrop from './Backdrop';
import Menu from './Menu';

import TouchableWithoutFeedbackView from '@components/TouchableWithoutFeedbackView';

import { percentStringToNumber, isPercentString } from '@utils/percents';
import { toBool } from '@utils/booleans';

import { createPropTypes, PropTypes } from '@utils/propTypes';

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

  const width = calculateMenuWidth(defaultMenu, window);
  const height = calculateMenuHeight(defaultMenu, window);

  return {
    width,
    height,
    minWidth: width,
    minHeight: height
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

let count = 0;

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
  // HACK
  // useWindowDimensions causes infinite re-rendering
  // https://github.com/facebook/react-native/issues/26733
  // const window = useWindowDimensions();
  const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  };

  const handleTouchablePress = event => {
    setPage({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });

    console.log(`handleTouchablePress`);

    onContentPress();
  };

  const menuStyle = calculateMenuStyle(isVisible, { width, height }, window);
  const locationStyle = calculateLocationStyle(isVisible, menuStyle, window, page);

  return (
    <>
      <TouchableWithoutFeedbackView
        preventTouchesOnChildren={true}
        onPress={handleTouchablePress}
        style={contentContainerStyle}
      >
        {renderContent()}
      </TouchableWithoutFeedbackView>

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

[OverlayMenu.propTypes, OverlayMenu.defaultProps] = createPropTypes({
  isVisible: PropTypes.bool,
  onContentPress: PropTypes.func,
  onBackdropPress: PropTypes.func,
  renderContent: PropTypes.func,
  renderOptions: PropTypes.func,
  width: [PropTypes.oneOfType([PropTypes.number, PropTypes.string]), '35%'],
  height: [PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 100],
  style: TouchableWithoutFeedbackView.propTypes.style,
  contentContainerStyle: TouchableWithoutFeedbackView.propTypes.style,
  backdropStyle: TouchableWithoutFeedbackView.propTypes.style
});

export default OverlayMenu;
