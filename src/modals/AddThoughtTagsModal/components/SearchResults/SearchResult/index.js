import React from 'react';
import { StyleSheet } from 'react-native';

import Tag from '@components/Tag';
import IconButton from '@components/IconButton';
import CheckBox from '@components/CheckBox';

import View from '@components/View';
import TouchableView from '@components/TouchableView';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50
  },
  touchableWithoutFeedbackView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const SearchResult = ({ tag, selected, onChangeThoughtInEditDraftTags }) => {
  return (
    <View hasTopBorder style={styles.view}>
      <TouchableView
        onPress={onChangeThoughtInEditDraftTags}
        style={styles.touchableWithoutFeedbackView}
      >
        <CheckBox checked={selected} onPress={onChangeThoughtInEditDraftTags} />

        <Tag text={tag.text} />
      </TouchableView>

      <IconButton iconName="more-vert" iconColor="rgb(32,150,243)" />
    </View>
  );
};

export default SearchResult;
