import React from 'react';
import { useDispatch } from 'react-redux';

import ThoughtMenuOptions from '@pages/HomePage/components/ThoughtStreamSection/ThoughtList/Thought/ThoughtMenuOptions';

import {
  hideThoughtMenu,
  startThoughtTextEditMode,
  focusThoughtTextInput,
} from '@pages/HomePage/slice';

import {
  showAddThoughtTagsModal,
  startThoughtTagsEditMode,
  focusThoughtTagsSearch
} from '@modals/AddThoughtTagsModal/slice';

const ThoughtMenuOptionsContainer = ({ thought }) => {
  const dispatch = useDispatch();

  const handleEditTextPress = () => {
    dispatch(hideThoughtMenu({ id: thought.id }));
    dispatch(startThoughtTextEditMode({ thought }));

    // HACK
    // setTimeout can be very slow if `Debug Remote JS` is enabled.
    // Details: https://github.com/facebook/react-native/issues/20328
    //
    // To figure out why setTimeout is necessary here, see
    // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
    setTimeout(() => dispatch(focusThoughtTextInput()));
  };

  const handleAddTagsPress = () => {
    dispatch(hideThoughtMenu({ id: thought.id }));
    dispatch(showAddThoughtTagsModal());
    dispatch(startThoughtTagsEditMode({ thought }));

    // HACK
    // setTimeout can be very slow if `Debug Remote JS` is enabled.
    // Details: https://github.com/facebook/react-native/issues/20328
    //
    // To figure out why setTimeout is necessary here, see
    // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
    setTimeout(() => dispatch(focusThoughtTagsSearch()));
  };

  return (
    <ThoughtMenuOptions
      onEditTextPress={handleEditTextPress}
      onAddTagsPress={handleAddTagsPress}
    />
  );
};

export default ThoughtMenuOptionsContainer;
