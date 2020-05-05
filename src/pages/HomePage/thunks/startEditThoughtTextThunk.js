import { focus } from '@modules/FocusesModule/slice';
import { hide } from '@modules/VisibilitiesModule/slice';

import {
  finishCreateThoughtMode,
  startEditThoughtTextMode,

  changeThoughtInEditDraftText,

  setThoughtInEdit
} from '@pages/HomePage/slice';

const startEditThoughtTextThunk = ({ thought }) => (dispatch, getState) => {
  dispatch(hide(`thoughtMenu${thought.id}`));
  dispatch(changeThoughtInEditDraftText({ text: thought.text }));
  dispatch(finishCreateThoughtMode());
  dispatch(startEditThoughtTextMode());
  dispatch(setThoughtInEdit({ thought }));

  // HACK
  // setTimeout can be very slow if `Debug Remote JS` is enabled.
  // Details: https://github.com/facebook/react-native/issues/20328
  //
  // To figure out why setTimeout is necessary here, see
  // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
  setTimeout(() => dispatch(focus('editThoughtTextInput')));
};

export default startEditThoughtTextThunk;
