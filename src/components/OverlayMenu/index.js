import React, { useState } from 'react';
import { Dimensions, Modal } from 'react-native';

import Backdrop from '~/components/Backdrop';
import TouchableView from '~/components/TouchableView';

import Menu from './Menu';

import { percentStringToNumber, isPercentString } from '~/utils/percents';
import { toBool } from '~/utils/booleans';

import { createPropTypes, PropTypes, ViewPropTypes } from '~/utils/propTypes';

const calculateWidth = (menu, window) => {
  if (isPercentString(menu.width)) {
    return percentStringToNumber(menu.width) * (window.width / 100);
  }

  return menu.width;
};

const calculateHeight = (menu, window) => {
  if (isPercentString(menu.height)) {
    return percentStringToNumber(menu.height) * (window.height / 100);
  }

  return menu.height;
};

const calculateSizeStyle = (isVisible, menu, window) => {
  if (!isVisible) return {};

  const width = calculateWidth(menu, window);
  const height = calculateHeight(menu, window);

  return {
    width,
    height,
    minWidth: width,
    minHeight: height
  };
};

const calculateLeft = (menu, _window, page) => {
  if (page.x < menu.width + 40) return 0;

  return page.x - menu.width - 40;
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
  containerStyle,
  style,
  contentContainerStyle,
  backdropStyle
}) => {
  const [page, setPage] = useState({});
  // HACK useWindowDimensions causes infinite re-rendering
  // https://github.com/facebook/react-native/issues/26733
  // const window = useWindowDimensions();
  const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  };

  const handleTouchablePress = event => {
    setPage({ x: event.nativeEvent.pageX, y: event.nativeEvent.pageY });

    onContentPress();
  };

  const defaultMenu = { width, height };
  const sizeStyle = calculateSizeStyle(isVisible, defaultMenu, window);

  const menu = sizeStyle;
  const locationStyle = calculateLocationStyle(isVisible, menu, window, page);

  return (
    <>
      <TouchableView
        onPress={handleTouchablePress}
        style={contentContainerStyle}
      >
        {renderContent()}
      </TouchableView>

      {/* HACK toBool(isVisible) is necessary here, because Modal `visible` prop treats `null` as truthy value. */}
      <Modal visible={toBool(isVisible)} onRequestClose={onBackdropPress} transparent>
        <Backdrop onPress={onBackdropPress} style={backdropStyle} />

        <Menu
          containerStyle={[containerStyle, locationStyle, sizeStyle]}
          style={style}
          renderOptions={renderOptions}
        />
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
  containerStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  backdropStyle: ViewPropTypes.style
});

export default OverlayMenu;
