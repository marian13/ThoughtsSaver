import React from 'react';
import { StyleSheet } from 'react-native';

import ThoughtText from './ThoughtText';
import Time from './Time';

import TagList from '~/components/TagList';
import View from '~/components/View';

const styles = StyleSheet.create({
  outerView: {
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  innerView: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5
  }
});

const ThoughtContent = ({ testID, thought }) => {
  return (
    <View testID={testID} style={styles.outerView}>
      <View style={styles.innerView}>
        <ThoughtText text={thought.text} />
        <TagList small tags={thought.tags} />
        <Time createdAt={thought.createdAt} />
      </View>
    </View>
  );
};

export default ThoughtContent;
