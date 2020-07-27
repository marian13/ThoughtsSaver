import { now } from '@utils/dates';

import {
  updateThought
} from '@modules/ThoughtsModule/slice';

import {
  thoughtDraftTagsSelector,
  thoughtInEditIdSelector,

  hideAddThoughtTagsModal,

  finishThoughtTagsEditMode
} from '@modals/AddThoughtTagsModal/slice';

import thoughtTagsSearchChangeThunk from '@modals/AddThoughtTagsModal/thunks/thoughtTagsSearchChangeThunk';

const finishThoughtTagsEditModeButtonPressThunk = () => (dispatch, getState) => {
  const thoughtDraftTags = thoughtDraftTagsSelector(getState());
  const thoughtInEditId = thoughtInEditIdSelector(getState());

  const thoughtAttributes = {
    id: thoughtInEditId,
    tags: thoughtDraftTags,
    updatedAt: now()
  };

  dispatch(hideAddThoughtTagsModal());

  dispatch(updateThought({ thoughtAttributes }));

  dispatch(finishThoughtTagsEditMode());

  dispatch(thoughtTagsSearchChangeThunk({ text: '' }));
};

export default finishThoughtTagsEditModeButtonPressThunk;
