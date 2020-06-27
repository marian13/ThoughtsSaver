import { hide } from '@modules/VisibilitiesModule/slice';

import startSearchThoughtModeThunk from '@pages/HomePage/thunks/startSearchThoughtModeThunk';

import { GENERAL_THOUGHT_OPTIONS_MENU, SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

import { dispatchFocus } from '@utils/dispatch';

const selectSearchThoughtOptionThunk = () => dispatch => {
  dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));
  dispatch(startSearchThoughtModeThunk());
  dispatchFocus(dispatch, SEARCH_THOUGHT_INPUT);
};

export default selectSearchThoughtOptionThunk;
