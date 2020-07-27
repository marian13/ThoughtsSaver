import React from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import KeyboardAvoidingView from '@components/KeyboardAvoidingView';

import TopRow from './TopRow';
import BottomRow from './BottomRow';

const InteractionArea = ({
  isTopVisible,
  isInputFocused,
  inputText,
  inputPlaceholder,
  leftTopButtonIconName,
  leftTopButtonIconType,
  rightTopButtonIconName,
  rightTopButtonIconType,
  leftBottomButtonIconName,
  leftBottomButtonIconType,
  rightBottomButtonIconName,
  rightBottomButtonIconType,
  onInputFocus,
  onInputBlur,
  onInputTextChange,
  onLeftTopButtonPress,
  onRightTopButtonPress,
  onLeftBottomButtonPress,
  onRightBottomButtonPress,
  renderContent,
  style,
  contentContainerStyle
}) => (
  <KeyboardAvoidingView style={style}>
    <TopRow
      isVisible={isTopVisible}
      leftButtonIconName={leftTopButtonIconName}
      leftButtonIconType={leftTopButtonIconType}
      rightButtonIconName={rightTopButtonIconName}
      rightButtonIconType={rightTopButtonIconType}
      onLeftButtonPress={onLeftTopButtonPress}
      onRightButtonPress={onRightTopButtonPress}
      renderContent={renderContent}
      contentContainerStyle={contentContainerStyle}
    />

    <BottomRow
      isInputFocused={isInputFocused}
      inputText={inputText}
      inputPlaceholder={inputPlaceholder}
      leftButtonIconName={leftBottomButtonIconName}
      leftButtonIconType={leftBottomButtonIconType}
      rightButtonIconName={rightBottomButtonIconName}
      rightButtonIconType={rightBottomButtonIconType}
      onInputFocus={onInputFocus}
      onInputBlur={onInputBlur}
      onInputTextChange={onInputTextChange}
      onLeftButtonPress={onLeftBottomButtonPress}
      onRightButtonPress={onRightBottomButtonPress}
    />
  </KeyboardAvoidingView>
);

InteractionArea.propTypes = {
  isTopVisible: PropTypes.bool,
  isInputFocused: PropTypes.bool,
  inputText: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  leftTopButtonIconName: PropTypes.string,
  leftTopButtonIconType: PropTypes.string,
  rightTopButtonIconName: PropTypes.string,
  rightTopButtonIconType: PropTypes.string,
  leftBottomButtonIconName: PropTypes.string,
  leftBottomButtonIconType: PropTypes.string,
  rightBottomButtonIconName: PropTypes.string,
  rightBottomButtonIconType: PropTypes.string,
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  onInputTextChange: PropTypes.func,
  onLeftTopButtonPress: PropTypes.func,
  onRightTopButtonPress: PropTypes.func,
  onLeftBottomButtonPress: PropTypes.func,
  onRightBottomButtonPress: PropTypes.func,
  renderContent: PropTypes.func,
  style: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style
};

InteractionArea.defaultProps = {
  isTopVisible: true,
  isInputFocused: false,
  inputText: '',
  inputPlaceholder: '',
  leftTopButtonIconName: 'web-asset',
  leftTopButtonIconType: 'materail',
  rightTopButtonIconName: 'web-asset',
  rightTopButtonIconType: 'materail',
  leftBottomButtonIconName: 'web-asset',
  leftBottomButtonIconType: 'materail',
  rightBottomButtonIconName: 'web-asset',
  rightBottomButtonIconType: 'materail',
  onInputFocus: () => {},
  onInputBlur: () => {},
  onInputTextChange: () => {},
  onLeftTopButtonPress: () => {},
  onRightTopButtonPress: () => {},
  onLeftBottomButtonPress: () => {},
  onRightBottomButtonPress: () => {},
  renderContent: () => {},
  style: {},
  contentContainerStyle: {}
};

export default InteractionArea;
