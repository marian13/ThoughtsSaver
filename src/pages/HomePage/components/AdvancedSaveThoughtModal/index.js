import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import Modal from '@components/Modal';
import View from '@components/View';

import ToggleModeOptionsCollapseButton from '@pages/HomePage/components/ToggleModeOptionsCollapseButton';
import ToggleEmojiPickerCollapseButton from '@pages/HomePage/components/ToggleEmojiPickerCollapseButton';
import AttachFileToThoughtButton from '@pages/HomePage/components/AttachFileToThoughtButton';
import ToggleAdvancedSaveThoughtModalButton from '@pages/HomePage/components/ToggleAdvancedSaveThoughtModalButton';
import AttachRecordingToThoughtButton from '@pages/HomePage/components/AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from '@pages/HomePage/components/AttachPhotoToThoughtButton';
import ShowGeneralThoughtOptionsButton from '@pages/HomePage/components/ShowGeneralThoughtOptionsButton';

import EmojiPickerCollapse from '@pages/HomePage/components/EmojiPickerCollapse';

import { isVisibleSelector, hide } from '@modules/VisibilitiesModule/slice';

import { ADVANCED_SAVE_THOUGHT_MODAL } from '@pages/HomePage/constants/identifiers';

const AdvancedSaveThoughtModal = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector(isVisibleSelector(ADVANCED_SAVE_THOUGHT_MODAL));

  const handleBackdropPress = () => dispatch(hide(ADVANCED_SAVE_THOUGHT_MODAL));

  return (
    <Modal isVisible={isVisible} onBackdropPress={handleBackdropPress}>
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
    </Modal>
  );
};

export default AdvancedSaveThoughtModal;
