import { thoughtByIdSelector } from '~/modules/ThoughtsModule/slice';
import { setThought, setThoughtInEdit } from '~/pages/ThoughtTagsPage/slice';

import resetThunk from './resetThunk';

import { dispatchFocus } from '~/utils/dispatch';

import { SEARCH_THOUGHT_TAGS_INPUT } from '~/pages/ThoughtTagsPage/constants/identifiers';

const initThunk = ({ thoughtId }) => (dispatch, getState) => {
  const thought = thoughtByIdSelector(thoughtId)(getState());

  dispatch(resetThunk());

  dispatch(setThought({ thought }));
  dispatch(setThoughtInEdit({ thought }));

  dispatchFocus(dispatch, SEARCH_THOUGHT_TAGS_INPUT);
};

export default initThunk;
