import React from 'react';
import { StyleSheet, View } from 'react-native';

import { some } from 'lodash';

import Tag from '~/components/Tag';

const styles = StyleSheet.create({
  view: {
    paddingTop: 2,
    paddingRight: 2
  }
});

const TagList = ({ small, tags }) => {
  if (!some(tags)) return null;

  return tags.map(tag => (
    <View key={tag.id} style={styles.view}>
      <Tag small={small} text={tag.text} />
    </View>
  ));
};

export default TagList;
