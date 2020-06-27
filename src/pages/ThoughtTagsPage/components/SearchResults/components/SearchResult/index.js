import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Tag from '~/components/Tag';
import IconButton from '~/components/IconButton';
import CheckBox from '~/components/CheckBox';

import View from '~/components/View';
import TouchableView from '~/components/TouchableView';

import { doesThoughtHasTagSelector } from '~/pages/ThoughtTagsPage/slice';

import changeThoughtTagsThunk from './thunks/changeThoughtTagsThunk';

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

const SearchResult = ({ tag }) => {
  const dispatch = useDispatch();

  const hasTag = useSelector(doesThoughtHasTagSelector({ tag }));

  const handleTouchablePress = () => dispatch(changeThoughtTagsThunk({
    selected: !hasTag,
    tag
  }));

  return (
    <View hasTopBorder style={styles.view}>
      <TouchableView
        onPress={handleTouchablePress}
        style={styles.touchableWithoutFeedbackView}
      >
        <CheckBox checked={hasTag} onPress={handleTouchablePress} />

        <Tag text={tag.text} />
      </TouchableView>

      <IconButton iconName="more-vert" iconColor="rgb(32,150,243)" />
    </View>
  );
};

export default SearchResult;
