import React from 'react';
import { StyleSheet } from 'react-native';

import InteractionRow from '@components/InteractionRow';
import View from '@components/View';
import EmojiPicker from '@components/EmojiPicker';

import { EMOJI_PICKER_COLLAPSE } from '@pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  outerView: {
    paddingVertical: 5,
    flex: 1
  }
});

const EmojiPickerCollapse = ({ isVisible, onEmojiPick }) => (
  <InteractionRow
    testID={EMOJI_PICKER_COLLAPSE}
    isVisible={isVisible}
  >
    <View centered style={styles.outerView}>
      <EmojiPicker onPick={onEmojiPick} />
    </View>
  </InteractionRow>
);

export default EmojiPickerCollapse;
