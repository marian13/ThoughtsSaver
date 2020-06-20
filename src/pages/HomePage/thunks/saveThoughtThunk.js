import { generateUniqueId } from '@utils/generators';
import { now } from '@utils/dates';

import { createThought } from '@modules/ThoughtsModule/slice';
import { thoughtInCreateDraftTextSelector, resetThoughtInCreateDraft } from '@pages/HomePage/slice';

const createThoughtThunk = () => (dispatch, getState) => {
  const thoughtInCreateDraftText = thoughtInCreateDraftTextSelector(getState());

  if (!thoughtInCreateDraftText) return;

  const newThoughtAttributes = {
    id: generateUniqueId(),
    text: thoughtInCreateDraftText.trim(),
    createdAt: now(),
    updatedAt: null,
    tags: []
  };

  dispatch(createThought({ thoughtAttributes: newThoughtAttributes }));
  dispatch(resetThoughtInCreateDraft());
};

export default createThoughtThunk;
