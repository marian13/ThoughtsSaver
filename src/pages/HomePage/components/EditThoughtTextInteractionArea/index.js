import React from 'react';
import { StyleSheet } from 'react-native';

import { isEmpty } from 'lodash';

import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import InteractionRow from '@components/InteractionRow';
import TextInput from '@components/TextInput';
import View from '@components/View';

import Info from './Info';

const styles = StyleSheet.create({
  textInputContainerStyle: {
    paddingLeft: 15
  }
});

const EditThoughtTextInteractionArea = ({
  isEditThoughtTextInputFocused,
  thoughtInEditDraftText,
  thoughtInEditText,
  onEditThoughtTextInputChange,
  onEditThoughtTextInputFocus,
  onEditThoughtTextInputBlur,
  onCancelEditThoughtTextModeButtonPress,
  onFinishEditThoughtTextModeButtonPress
}) => (
  <View avoidKeyboard>
    <InteractionRow>
      <Info thoughtInEditText={thoughtInEditText} />

      <IconButton iconName="close" onPress={onCancelEditThoughtTextModeButtonPress} />
    </InteractionRow>

    <InteractionRow>
      <TextInput
        isFocused={isEditThoughtTextInputFocused}
        autoResise
        text={thoughtInEditDraftText}
        onFocus={onEditThoughtTextInputFocus}
        onBlur={onEditThoughtTextInputBlur}
        onTextChange={onEditThoughtTextInputChange}
        containerStyle={styles.textInputContainerStyle}
      />

      <IconButton
        disabled={isEmpty(thoughtInEditDraftText)}
        iconName="check-circle"
        onPress={onFinishEditThoughtTextModeButtonPress}
      />
    </InteractionRow>

    <InteractionRow>
      <View horizontal>
        <IconButton iconName="keyboard-arrow-down" />
        <IconButton iconName="tag-faces" />
        <IconButton iconName="attach-file" />
      </View>

      <View horizontal>
        <IconButton iconName="mic" />
        <IconButton iconName="photo-camera" />

        <IconButton iconName="more-vert" />
      </View>
    </InteractionRow>
  </View>
);

export default EditThoughtTextInteractionArea;
