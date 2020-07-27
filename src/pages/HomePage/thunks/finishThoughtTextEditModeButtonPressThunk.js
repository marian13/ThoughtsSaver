import { now } from '@utils/dates';

import {
  updateThought
} from '@modules/ThoughtsModule/slice';

import {
  thoughtDraftTextSelector,
  thoughtInEditIdSelector,

  finishThoughtTextEditMode
} from '@pages/HomePage/slice';

const finishThoughtTextEditModeButtonPressThunk = () => (dispatch, getState) => {
  const thoughtDraftText = thoughtDraftTextSelector(getState());
  const thoughtInEditId = thoughtInEditIdSelector(getState());

  const thoughtAttributes = {
    id: thoughtInEditId,
    text: thoughtDraftText,
    updatedAt: now()
  };

  dispatch(updateThought({ thoughtAttributes }));

  dispatch(finishThoughtTextEditMode());
};

export default finishThoughtTextEditModeButtonPressThunk;
