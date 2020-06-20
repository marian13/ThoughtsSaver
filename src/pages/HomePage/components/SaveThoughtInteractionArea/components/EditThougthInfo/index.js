import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Text from '@components/Text';
import View from '@components/View';

import { thoughtInEditTextSelector } from '@pages/HomePage/slice';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 15
  }
});

const EditThoughtInfo = () => {
  const thoughtInEditText = useSelector(thoughtInEditTextSelector);

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

export default EditThoughtInfo;
