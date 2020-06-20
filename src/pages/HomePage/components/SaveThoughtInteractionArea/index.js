import React from 'react';
import { useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import View from '@components/View';

import ThoughtTextInput from '@pages/HomePage/components/ThoughtTextInput';
import SaveThoughtButton from '@pages/HomePage/components/SaveThoughtButton';

import ToggleModeOptionsCollapseButton from '@pages/HomePage/components/ToggleModeOptionsCollapseButton';
import ToggleEmojiPickerCollapseButton from '@pages/HomePage/components/ToggleEmojiPickerCollapseButton';
import AttachFileToThoughtButton from '@pages/HomePage/components/AttachFileToThoughtButton';
import ToggleAdvancedSaveThoughtModalButton from '@pages/HomePage/components/ToggleAdvancedSaveThoughtModalButton';

import AttachRecordingToThoughtButton from '@pages/HomePage/components/AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from '@pages/HomePage/components/AttachPhotoToThoughtButton';
import ShowGeneralThoughtOptionsButton from '@pages/HomePage/components/ShowGeneralThoughtOptionsButton';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';
import AdvancedSaveThoughtModal from '@pages/HomePage/components/AdvancedSaveThoughtModal';

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

      <EmojiPickerCollapse />
      <AdvancedSaveThoughtModal />
    </View>
  );
};

export default SaveThoughtInteractionArea;
