import React from 'react';
import { useSelector } from 'react-redux';

import InteractionRow from '~/components/InteractionRow';
import View from '~/components/View';

import ToggleEmojiPickerCollapseButton from '../ToggleEmojiPickerCollapseButton';

import ThoughtTextInput from './components/ThoughtTextInput';
import SaveThoughtButton from './components/SaveThoughtButton';

import ToggleSaveThoughtOptionsCollapseButton from './components/ToggleSaveThoughtOptionsCollapseButton';
import AttachFileToThoughtButton from './components/AttachFileToThoughtButton';
import ToggleThoughtPreviewModeButton from './components/ToggleThoughtPreviewModeButton';

import AttachRecordingToThoughtButton from './components/AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from './components/AttachPhotoToThoughtButton';
import ShowMoreActionsButton from './components/ShowMoreActionsButton';

import EmojiPickerCollapse from './components/EmojiPickerCollapse';

import EditThougthInfo from './components/EditThougthInfo';
import CancelEditThoughtButton from './components/CancelEditThoughtButton';

import { isEditThoughtModeSelector } from '~/pages/HomePage/slice';

const SaveThoughtInteractionArea = () => {
  const isEditThoughtMode = useSelector(isEditThoughtModeSelector);

  return (
    <View avoidKeyboard>
      <InteractionRow isVisible={isEditThoughtMode}>
        <EditThougthInfo />
        <CancelEditThoughtButton />
      </InteractionRow>

      <InteractionRow>
        <ThoughtTextInput />
        <SaveThoughtButton />
      </InteractionRow>

      <InteractionRow>
        <View horizontal>
          <ToggleSaveThoughtOptionsCollapseButton />
          <ToggleEmojiPickerCollapseButton />
          <AttachFileToThoughtButton />
          <ToggleThoughtPreviewModeButton />
        </View>

        <View horizontal>
          <AttachRecordingToThoughtButton />
          <AttachPhotoToThoughtButton />
          <ShowMoreActionsButton />
        </View>
      </InteractionRow>

      <EmojiPickerCollapse />
    </View>
  );
};

export default SaveThoughtInteractionArea;
