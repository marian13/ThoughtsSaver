import React from 'react';

import CheckBox from '@components/CheckBox';
import Text from '@components/Text';
import TouchableView from '@components/TouchableView';
import View from '@components/View';

const SearchThoughtOption = ({
  testID,
  selected,
  text,
  onPress
}) => (
  <TouchableView
    testID={testID}
    horizontal
    onPress={onPress}
  >
    <CheckBox checked={selected} onPress={onPress} />

    <View centered>
      <Text large>{text}</Text>
    </View>
  </TouchableView>
);

export default SearchThoughtOption;
