import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import View from '@components/View';
import IconButton from '@components/IconButton';
import ScrollableTextInput from '@components/ScrollableTextInput';

const styles = StyleSheet.create({
  outerView: {
    justifyContent: 'flex-end'
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});

const BottomRow = ({
  isInputFocused,
  inputText,
  inputPlaceholder,
  leftButtonIconName,
  leftButtonIconType,
  rightButtonIconName,
  rightButtonIconType,
  onInputFocus,
  onInputBlur,
  onInputTextChange,
  onLeftButtonPress,
  onRightButtonPress
}) => {
  return (
    <View style={styles.outerView}>
      <View hasTopBorder style={styles.innerView}>
        <IconButton
          iconName={leftButtonIconName}
          iconType={leftButtonIconType}
          onPress={onLeftButtonPress}
        />

        <ScrollableTextInput
          isFocused={isInputFocused}
          text={inputText}
          placeholder={inputPlaceholder}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onTextChange={onInputTextChange}
        />

        <IconButton
          iconName={rightButtonIconName}
          iconType={rightButtonIconType}
          onPress={onRightButtonPress}
        />
      </View>
    </View>
  );
};

BottomRow.propTypes = {
  isInputFocused: PropTypes.bool,
  inputText: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  leftButtonIconName: PropTypes.string,
  leftButtonIconType: PropTypes.string,
  rightButtonIconName: PropTypes.string,
  rightButtonIconType: PropTypes.string,
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  onInputTextChange: PropTypes.func,
  onLeftButtonPress: PropTypes.func,
  onRightButtonPress: PropTypes.func
};

BottomRow.defaultProps = {
  isInputFocused: false,
  inputText: '',
  inputPlaceholder: '',
  leftButtonIconName: 'web-asset',
  leftButtonIconType: 'material',
  rightButtonIconName: 'web-asset',
  rightButtonIconType: 'material',
  onInputFocus: () => {},
  onInputBlur: () => {},
  onInputTextChange: () => {},
  onLeftButtonPress: () => {},
  onRightButtonPress: () => {}
};

export default BottomRow;
