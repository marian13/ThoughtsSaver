import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { hoursAndMinutes } from '@utils/dates';

const styles = StyleSheet.create({
  text: {
    fontSize: 12
  }
});

const Time = ({ createdAt, style }) => (
  <View style={style}>
    <Text style={styles.text}>
      {hoursAndMinutes(createdAt)}
    </Text>
  </View>
);

export default Time;
