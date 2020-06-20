import React from 'react';
import { useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import View from '@components/View';

import ToggleEmojiPickerCollapseButton from '../ToggleEmojiPickerCollapseButton';

import ThoughtTextInput from './components/ThoughtTextInput';
import SaveThoughtButton from './components/SaveThoughtButton';

import ToggleModeOptionsCollapseButton from './components/ToggleModeOptionsCollapseButton';
import AttachFileToThoughtButton from './components/AttachFileToThoughtButton';
import ToggleAdvancedSaveThoughtModalButton from './components/ToggleAdvancedSaveThoughtModalButton';

import AttachRecordingToThoughtButton from './components/AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from './components/AttachPhotoToThoughtButton';
import ShowGeneralThoughtOptionsButton from './components/ShowGeneralThoughtOptionsButton';

import SaveThoughtEmojiPickerCollapse from './components/SaveThoughtEmojiPickerCollapse';
import AdvancedSaveThoughtModal from './components/AdvancedSaveThoughtModal';

import EditThougthInfo from './components/EditThougthInfo';
import CancelEditThoughtButton from './components/CancelEditThoughtButton';

import { isEditThoughtModeSelector } from '@pages/HomePage/slice';

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
          <ToggleModeOptionsCollapseButton />
          <ToggleEmojiPickerCollapseButton />
          <AttachFileToThoughtButton />
          <ToggleAdvancedSaveThoughtModalButton />
        </View>

        <View horizontal>
          <AttachRecordingToThoughtButton />
          <AttachPhotoToThoughtButton />
          <ShowGeneralThoughtOptionsButton />
        </View>
      </InteractionRow>

      <SaveThoughtEmojiPickerCollapse />
      <AdvancedSaveThoughtModal />
    </View>
  );
};

export default SaveThoughtInteractionArea;
