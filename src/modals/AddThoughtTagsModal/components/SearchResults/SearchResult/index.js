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
    alignItems: 'center',
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
      <IconButton
        iconName="more-vert"
        iconType="material"
        iconColor="#bfbfbf"
      />

      <TouchableView
        onPress={onChangeThoughtInEditDraftTags}
        style={styles.touchableWithoutFeedbackView}
      >
        <Tag text={tag.text} />

        <CheckBox
          checked={selected}
          onPress={onChangeThoughtInEditDraftTags}
        />
      </TouchableView>
    </View>
  );
};

export default SearchResult;
