import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { size } from 'lodash';

import BoldText from '@components/BoldText';
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
  boldText: {
    fontSize: 14,
    position: 'absolute',
    top: 3,
    left: 0
  }
});

const renderContent = ({ thoughtDraftTags }) => {
  // WARNING fragile code #1
  // HACK
  // Fixed BoldText inside ScrollView.
  // ThoughtTagsSearchSection Content uses the same hack.
  // As a result, if some styles are changed here, the same changes must be reflected there.

  return (
    <View style={styles.outerView}>
      <BoldText style={styles.boldText}>
        Already Added Tags ({size(thoughtDraftTags)})
      </BoldText>

      <ScrollView horizontal>
        <View style={styles.innerView}>
          <TagList small tags={thoughtDraftTags} />
        </View>
      </ScrollView>
    </View>
  );
};

const ThoughtTagsSearchSection = ({
  isThoughtTagsSearchFocused,
  thoughtTagsSearchText,
  thoughtDraftTags,
  onThoughtTagsSearchChange,
  onThoughtTagsSearchFocus,
  onThoughtTagsSearchBlur,
  onCancelThoughtTagsEditModeButtonPress,
  onFinishThoughtTagsEditModeButtonPress
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
    onRightTopButtonPress={onCancelThoughtTagsEditModeButtonPress}
    onRightBottomButtonPress={onFinishThoughtTagsEditModeButtonPress}
    renderContent={() => renderContent({ thoughtDraftTags })}
    style={styles.interactionArea}
  />
);

export default ThoughtTagsSearchSection;

