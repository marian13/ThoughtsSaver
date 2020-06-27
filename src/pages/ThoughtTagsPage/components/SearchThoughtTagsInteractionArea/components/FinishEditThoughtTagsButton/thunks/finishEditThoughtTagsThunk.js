import { now } from '@utils/dates';

import { updateThought } from '@modules/ThoughtsModule/slice';

import { thoughtTagsSelector, thoughtInEditIdSelector } from '@pages/ThoughtTagsPage/slice';

import searchThoughtTagsThunk from '../../../thunks/searchThoughtTagsThunk';

const finishEditThoughtTagsThunk = () => (dispatch, getState) => {
  const thoughtDraftTags = thoughtTagsSelector(getState());
  const thoughtInEditId = thoughtInEditIdSelector(getState());

  const thoughtAttributes = {
    id: thoughtInEditId,
    tags: thoughtDraftTags,
    updatedAt: now()
  };

  dispatch(updateThought({ thoughtAttributes }));
  dispatch(searchThoughtTagsThunk({ text: '' }));
};

export default finishEditThoughtTagsThunk;
