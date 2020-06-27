import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InteractionRow from '@components/InteractionRow';
import Modal from '@components/Modal';
import View from '@components/View';

import ToggleEmojiPickerCollapseButton from '../../../ToggleEmojiPickerCollapseButton';

import ToggleSaveThoughtOptionsCollapseButton from '../ToggleSaveThoughtOptionsCollapseButton';
import AttachFileToThoughtButton from '../AttachFileToThoughtButton';
import ToggleAdvancedSaveThoughtModalButton from '../ToggleAdvancedSaveThoughtModalButton';
import AttachRecordingToThoughtButton from '../AttachRecordingToThoughtButton';
import AttachPhotoToThoughtButton from '../AttachPhotoToThoughtButton';
import ShowMoreActionsButton from '../ShowMoreActionsButton';
import EmojiPickerCollapse from '../EmojiPickerCollapse';

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
          <ToggleSaveThoughtOptionsCollapseButton />
          <ToggleEmojiPickerCollapseButton />
          <AttachFileToThoughtButton />
          <ToggleAdvancedSaveThoughtModalButton />
        </View>

        <View horizontal>
          <AttachRecordingToThoughtButton />
          <AttachPhotoToThoughtButton />
          <ShowMoreActionsButton />
        </View>
      </InteractionRow>

      <EmojiPickerCollapse />
    </Modal>
  );
};

export default AdvancedSaveThoughtModal;
