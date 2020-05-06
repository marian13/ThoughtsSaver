import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { size } from 'lodash';

import View from '@components/View';
import Text from '@components/Text';
import InteractionArea from '@components/InteractionArea';
import TagList from '@components/TagList';

const styles = StyleSheet.create({
  interactionArea: {
    justifyContent: 'flex-end'
  },
  outerView: {
    justifyContent: 'center',
    height: 45
  },
  innerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 2
  },
  text: {
    position: 'absolute',
    top: 3,
    left: 0
  }
});

const renderContent = ({ thoughtInEditDraftTags }) => {
  // WARNING fragile code #1
  // HACK
  // Fixed Text inside ScrollView.
  // ThoughtTagsSearch Content uses the same hack.
  // As a result, if some styles are changed here, the same changes must be reflected there.

  return (
    <View style={styles.outerView}>
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
};

const ThoughtTagsSearch = ({
  isThoughtTagsSearchFocused,
  thoughtTagsSearchText,
  thoughtInEditDraftTags,
  onThoughtTagsSearchChange,
  onThoughtTagsSearchFocus,
  onThoughtTagsSearchBlur,
  onCancelEditThoughtTagsButtonPress,
  onFinishEditThoughtTagsButtonPress
}) => (
  <InteractionArea
    isTopVisible={true}
    isInputFocused={isThoughtTagsSearchFocused}
    inputText={thoughtTagsSearchText}
    inputPlaceholder="Search for a tag..."
    leftTopButtonIconName="edit"
    rightTopButtonIconName="close"
    leftBottomButtonIconName="search"
    rightBottomButtonIconName="check-circle"
    onInputFocus={onThoughtTagsSearchFocus}
    onInputBlur={onThoughtTagsSearchBlur}
    onInputTextChange={onThoughtTagsSearchChange}
    onRightTopButtonPress={onCancelEditThoughtTagsButtonPress}
    onRightBottomButtonPress={onFinishEditThoughtTagsButtonPress}
    renderContent={() => renderContent({ thoughtInEditDraftTags })}
    style={styles.interactionArea}
  />
);

export default ThoughtTagsSearch;

