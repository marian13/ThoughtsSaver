import React from 'react';
import { StyleSheet } from 'react-native';

import Tag from '~/components/Tag';
import View from '~/components/View';

const styles = StyleSheet.create({
  tagContainer: {
    paddingRight: 2
  }
});

const TagList = ({ small, tags }) => {
  return (
    <View horizontal>
      {tags.map(tag => (
        <Tag
          key={tag.id}
          small={small}
          text={tag.text}
          containerStyle={styles.tagContainer}
        />
      ))}
    </View>
  );
};

export default TagList;
