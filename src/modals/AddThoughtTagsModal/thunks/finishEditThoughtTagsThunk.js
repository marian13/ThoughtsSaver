import { now } from '@utils/dates';

import { updateThought } from '@modules/ThoughtsModule/slice';
import { hide } from '@modules/VisibilitiesModule/slice';

import { thoughtInEditDraftTagsSelector, thoughtInEditIdSelector } from '@modals/AddThoughtTagsModal/slice';

import changeThoughtTagsSearchThunk from '@modals/AddThoughtTagsModal/thunks/changeThoughtTagsSearchThunk';

const finishEditThoughtTagsThunk = () => (dispatch, getState) => {
  const thoughtDraftTags = thoughtInEditDraftTagsSelector(getState());
  const thoughtInEditId = thoughtInEditIdSelector(getState());

  const thoughtAttributes = {
    id: thoughtInEditId,
    tags: thoughtDraftTags,
    updatedAt: now()
  };

  dispatch(hide('addThoughtTagsModal'));
  dispatch(updateThought({ thoughtAttributes }));
  dispatch(changeThoughtTagsSearchThunk({ text: '' }));
};

export default finishEditThoughtTagsThunk;
