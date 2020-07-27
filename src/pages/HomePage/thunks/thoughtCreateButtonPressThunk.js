import { generateUniqueId } from '@utils/generators';
import { now } from '@utils/dates';

import {
  createThought
} from '@modules/ThoughtsModule/slice';

import {
  thoughtDraftTextSelector,

  resetThoughtDraft
} from '@pages/HomePage/slice';

const thoughtCreateButtonPressThunk = () => (dispatch, getState) => {
  const thoughtDraftText = thoughtDraftTextSelector(getState());

  if (!thoughtDraftText) return;

  const newThoughtAttributes = {
    id: generateUniqueId(),
    text: thoughtDraftText,
    createdAt: now(),
    updatedAt: null,
    tags: []
  };

  dispatch(createThought({ thoughtAttributes: newThoughtAttributes }));

  dispatch(resetThoughtDraft());
};

export default thoughtCreateButtonPressThunk;
