import React from 'react';

import IconButton from '~/components/IconButton';

import { createPropTypes, PropTypes } from '~/utils/propTypes';

const CheckBox = ({ checked, value, onPress }) => (
  <IconButton
    iconName={checked ? 'check' : 'panorama-fish-eye'}
    iconColor={checked ? 'rgb(0,150,137)' : '#bfbfbf'}
    onPress={() => onPress(!checked, value)}
  />
);

[CheckBox.propTypes, CheckBox.defaultProps] = createPropTypes({
  checked: PropTypes.bool,
  value: PropTypes.string,
  onPress: PropTypes.func
});

export default CheckBox;
