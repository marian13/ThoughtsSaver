import React from 'react';

import IconButton from '@components/IconButton';

const CheckBoxButton = ({ checked, onPress }) => (
  <IconButton
    iconName={checked ? 'check' : 'panorama-fish-eye'}
    iconType="material"
    iconColor={checked ? 'rgb(0,150,137)' : '#bfbfbf'}
    onPress={() => onPress(!checked)}
  />
);

export default CheckBoxButton;
