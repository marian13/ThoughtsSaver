import { hide } from '~/modules/VisibilitiesModule/slice';

import finishCreateThoughtModeThunk from '~/pages/HomePage/thunks/finishCreateThoughtModeThunk';
import startEditThoughtModeThunk from '~/pages/HomePage/thunks/startEditThoughtModeThunk';

import { dispatchFocus } from '~/utils/dispatch';

import { THOUGHT_TEXT_INPUT, getThoughtMenuID } from '~/pages/HomePage/constants/identifiers';

const editThoughtThunk = ({ thought }) => dispatch => {
  dispatch(hide(getThoughtMenuID(thought)));

  dispatch(finishCreateThoughtModeThunk());

  dispatch(startEditThoughtModeThunk({ thought }));

  dispatchFocus(dispatch, THOUGHT_TEXT_INPUT);
};

export default editThoughtThunk;
