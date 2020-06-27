import { generateUniqueId } from '~/utils/generators';
import { now } from '~/utils/dates';

import { createThought, updateThought } from '~/modules/ThoughtsModule/slice';
import {
  isCreateThoughtModeSelector,

  thoughtIdSelector,
  thoughtTextSelector,
  resetThought
} from '~/pages/HomePage/slice';

import finishEditThoughtModeThunk from '~/pages/HomePage/thunks/finishEditThoughtModeThunk';
import startCreateThoughtModeThunk from '~/pages/HomePage/thunks/startCreateThoughtModeThunk';

const create = (dispatch, getState) => {
  const thoughtText = thoughtTextSelector(getState());

  if (!thoughtText) return;

  const newThoughtAttributes = {
    id: generateUniqueId(),
    text: thoughtText.trim(),
    createdAt: now(),
    updatedAt: null,
    tags: []
  };

  dispatch(createThought({ thoughtAttributes: newThoughtAttributes }));

  dispatch(resetThought());;
};

const update = (dispatch, getState) => {
  const thoughtId = thoughtIdSelector(getState());
  const thoughtText = thoughtTextSelector(getState());

  const thoughtAttributes = {
    id: thoughtId,
    text: thoughtText,
    updatedAt: now()
  };

  dispatch(updateThought({ thoughtAttributes }));

  dispatch(finishEditThoughtModeThunk());
  dispatch(startCreateThoughtModeThunk());
};

const saveThoughtThunk = () => (dispatch, getState) => {
  const isCreateMode = isCreateThoughtModeSelector(getState());

  isCreateMode ? create(dispatch, getState) : update(dispatch, getState);
};

export default saveThoughtThunk;
