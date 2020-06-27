import React from 'react';
import { useNavigation } from '@react-navigation/native';

import IconButton from '~/components/IconButton';

import { HOME_PAGE } from '~/pages/HomePage/constants/identifiers';

const CancelEditThoughtTagsButton = () => {
  const { navigate } = useNavigation();

  const handleButtonPress = () => navigate(HOME_PAGE);

  return <IconButton iconName="close" onPress={handleButtonPress} />;
};

export default CancelEditThoughtTagsButton;
