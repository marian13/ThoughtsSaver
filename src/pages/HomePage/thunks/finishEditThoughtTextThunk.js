import { now } from '@utils/dates';

import { updateThought } from '@modules/ThoughtsModule/slice';

import {
  thoughtInEditDraftTextSelector,
  thoughtInEditIdSelector,

  finishEditThoughtTextMode,
  startCreateThoughtMode,

  resetThoughtInEditDraft,
  resetThoughtInEdit
} from '@pages/HomePage/slice';

const finishEditThoughtTextThunk = () => (dispatch, getState) => {
  const thoughtInEditDraftText = thoughtInEditDraftTextSelector(getState());
  const thoughtInEditId = thoughtInEditIdSelector(getState());

  const thoughtAttributes = {
    id: thoughtInEditId,
    text: thoughtInEditDraftText,
    updatedAt: now()
  };

  dispatch(updateThought({ thoughtAttributes }));
  dispatch(finishEditThoughtTextMode());
  dispatch(startCreateThoughtMode());
  dispatch(resetThoughtInEditDraft());
  dispatch(resetThoughtInEdit());
};

export default finishEditThoughtTextThunk;
