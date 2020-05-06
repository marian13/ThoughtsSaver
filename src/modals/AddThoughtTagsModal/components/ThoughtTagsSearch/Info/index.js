import React from 'react';
import { StyleSheet } from 'react-native';

import { size } from 'lodash';

import View from '@components/View';
import Text from '@components/Text';
import ScrollView from '@components/ScrollView';
import TagList from '@components/TagList';

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 2
  },
  text: {
    position: 'absolute', // HACK
    left: 2,
    bottom: 25
  }
});

const Info = ({ thoughtInEditDraftTags }) => (
  <View centered style={styles.outerView}>
    <Text bold style={styles.text}>
      Already Added Tags ({size(thoughtInEditDraftTags)})
    </Text>

    <ScrollView horizontal>
      <View style={styles.innerView}>
        <TagList small tags={thoughtInEditDraftTags} />
      </View>
    </ScrollView>
  </View>
);

export default Info;
