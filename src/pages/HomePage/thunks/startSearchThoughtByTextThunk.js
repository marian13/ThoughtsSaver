import { hide } from '@modules/VisibilitiesModule/slice';

import {
  finishCreateThoughtMode,
  startSearchThoughtByTextMode
} from '@pages/HomePage/slice';

import { GENERAL_THOUGHT_OPTIONS_MENU, SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

import { dispatchFocus } from '@utils/dispatch';

const startSearchThoughtByTextThunk = () => dispatch => {
  dispatch(finishCreateThoughtMode());
  dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));
  dispatch(startSearchThoughtByTextMode());
  dispatchFocus(dispatch, SEARCH_THOUGHT_INPUT);
};

export default startSearchThoughtByTextThunk;
