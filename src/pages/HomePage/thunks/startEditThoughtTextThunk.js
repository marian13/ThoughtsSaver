import { hide } from '@modules/VisibilitiesModule/slice';

import {
  finishCreateThoughtMode,
  startEditThoughtTextMode,

  changeThoughtInEditDraftText,

  setThoughtInEdit
} from '@pages/HomePage/slice';

import { dispatchFocus } from '@utils/dispatch';

const startEditThoughtTextThunk = ({ thought }) => (dispatch, getState) => {
  dispatch(hide(`thoughtMenu${thought.id}`));
  dispatch(changeThoughtInEditDraftText({ text: thought.text }));
  dispatch(finishCreateThoughtMode());
  dispatch(startEditThoughtTextMode());
  dispatch(setThoughtInEdit({ thought }));
  dispatchFocus(dispatch, 'editThoughtTextInput');
};

export default startEditThoughtTextThunk;
