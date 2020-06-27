import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import View from '~/components/View';
import Text from '~/components/Text';
import ScrollView from '~/components/ScrollView';
import TagList from '~/components/TagList';

import { thoughtTagsSelector } from '~/pages/ThoughtTagsPage/slice';

import { size } from '~/utils/arrays';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    paddingLeft: 15
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5
  },
  text: {
    position: 'absolute', // HACK
    left: 15,
    bottom: 25
  }
});

const SearchThoughtTagsInfo = () => {
  const thoughtTags = useSelector(thoughtTagsSelector);

  return (
    <View style={styles.outerView}>
      <Text bold style={styles.text}>
        Already Added Tags ({size(thoughtTags)})
      </Text>

      <ScrollView horizontal>
        <View style={styles.innerView}>
          <TagList small tags={thoughtTags} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchThoughtTagsInfo;
