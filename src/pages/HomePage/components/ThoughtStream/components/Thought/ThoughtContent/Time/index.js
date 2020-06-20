import React from 'react';

import View from '@components/View';
import Text from '@components/Text';

import { hoursAndMinutes } from '@utils/dates';

const Time = ({ createdAt, style }) => (
  <View style={style}>
    <Text small>
      {hoursAndMinutes(createdAt)}
    </Text>
  </View>
);

export default Time;
