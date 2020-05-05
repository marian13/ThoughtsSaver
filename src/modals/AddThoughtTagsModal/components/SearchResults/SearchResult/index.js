import React from 'react';
import { StyleSheet } from 'react-native';

import Tag from '@components/Tag';
import IconButton from '@components/IconButton';
import CheckBoxButton from '@components/CheckBoxButton';

import BorderedView from '@components/BorderedView';
import TouchableWithoutFeedbackView from '@components/TouchableWithoutFeedbackView';

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
    <BorderedView hasTopBorder style={styles.view}>
      <IconButton
        iconName="more-vert"
        iconType="material"
        iconColor="#bfbfbf"
      />

      <TouchableWithoutFeedbackView
        onPress={onChangeThoughtInEditDraftTags}
        style={styles.touchableWithoutFeedbackView}
      >
        <Tag text={tag.text} />

        <CheckBoxButton
          checked={selected}
          onPress={onChangeThoughtInEditDraftTags}
        />
      </TouchableWithoutFeedbackView>
    </BorderedView>
  );
};

export default SearchResult;
