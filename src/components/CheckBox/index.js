import React from 'react';

import IconButton from '@components/IconButton';

import { createPropTypes, PropTypes } from '@utils/propTypes';

const CheckBox = ({ checked, onPress }) => (
  <IconButton
    iconName={checked ? 'check' : 'panorama-fish-eye'}
    iconType="material"
    iconColor={checked ? 'rgb(0,150,137)' : '#bfbfbf'}
    onPress={() => onPress(!checked)}
  />
);

[CheckBox.propTypes, CheckBox.defaultProps] = createPropTypes({
  checked: PropTypes.bool,
  onPress: PropTypes.func
});

export default CheckBox;
