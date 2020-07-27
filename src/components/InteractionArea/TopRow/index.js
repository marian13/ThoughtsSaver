import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import BorderedView from '@components/BorderedView';
import IconButton from '@components/IconButton';

const styles = StyleSheet.create({
  borderedView: {
    justifyContent: 'flex-end'
  },
  outerView: {
    flexDirection: 'row'
  },
  innerView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 1
  }
});

const TopRow = ({
  isVisible,
  leftButtonIconName,
  leftButtonIconType,
  rightButtonIconName,
  rightButtonIconType,
  onLeftButtonPress,
  onRightButtonPress,
  renderContent,
  contentContainerStyle
}) => {
  if (!isVisible) return null;

  return (
    <BorderedView hasTopBorder style={styles.borderedView}>
      <View style={styles.outerView}>
        <IconButton
          iconName={leftButtonIconName}
          iconType={leftButtonIconType}
          onPress={onLeftButtonPress}
        />

        <View style={[styles.innerView, contentContainerStyle]}>
          {renderContent()}
        </View>

        <IconButton
          iconName={rightButtonIconName}
          iconType={rightButtonIconType}
          onPress={onRightButtonPress}
        />
      </View>
    </BorderedView>
  );
};

TopRow.propTypes = {
  isVisible: PropTypes.bool,
  leftButtonIconName: PropTypes.string,
  leftButtonIconType:  PropTypes.string,
  rightButtonIconName: PropTypes.string,
  rightButtonIconType:  PropTypes.string,
  onLeftButtonPress: PropTypes.func,
  onRightButtonPress: PropTypes.func,
  renderContent: PropTypes.func,
  contentContainerStyle: ViewPropTypes.style
};

TopRow.defaultProps = {
  isVisible: true,
  leftButtonIconName: 'web-asset',
  leftButtonIconType: 'material',
  rightButtonIconName: 'web-asset',
  rightButtonIconType: 'material',
  onLeftButtonPress: () => {},
  onRightButtonPress: () => {},
  renderContent: () => {},
  contentContainerStyle: {}
};

export default TopRow;
