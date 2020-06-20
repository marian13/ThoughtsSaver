import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import Modal from '@components/Modal';
import View from '@components/View';

import EmojiPickerCollapse from '@pages/HomePage/components/ThoughtInteractionArea/components/EmojiPickerCollapse';
import ToggleEmojiPickerCollapseButton from '../../../ToggleEmojiPickerCollapseButton';

import ToggleModeOptionsCollapseButton from '../ToggleModeOptionsCollapseButton';
import AttachFileToThoughtButton from '../AttachFileToThoughtButton';
import ToggleAdvancedSaveThoughtModalButton from '../ToggleAdvancedSaveThoughtModalButton';
import AttachRecordingToThoughtButton from '../AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from '../AttachPhotoToThoughtButton';
import ShowGeneralThoughtOptionsButton from '../ShowGeneralThoughtOptionsButton';

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
