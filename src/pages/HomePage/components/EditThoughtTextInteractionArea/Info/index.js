import React from 'react';
import { StyleSheet } from 'react-native';

import View from '@components/View';
import Text from '@components/Text';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 15
  }
});

const Info = ({ thoughtInEditText }) => {
  return (
    <View style={styles.outerView}>
      <View>
        <Text bold style={styles.text}>
          Edit Thought
        </Text>
      </View>

      <View>
        <Text reduced>
          {thoughtInEditText}
        </Text>
      </View>
    </View>
  );
};

export default Info;
