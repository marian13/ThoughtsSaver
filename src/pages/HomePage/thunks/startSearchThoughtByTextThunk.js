import { focus } from '@modules/FocusesModule/slice';

import {
  finishCreateThoughtMode,
  startSearchThoughtByTextMode
} from '@pages/HomePage/slice';

const startSearchThoughtByTextThunk = () => (dispatch, getState) => {
  dispatch(finishCreateThoughtMode());
  dispatch(startSearchThoughtByTextMode());

  // HACK
  // setTimeout can be very slow if `Debug Remote JS` is enabled.
  // Details: https://github.com/facebook/react-native/issues/20328
  //
  // To figure out why setTimeout is necessary here, see
  // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
  setTimeout(() => dispatch(focus('searchThoughtInput')));
};

export default startSearchThoughtByTextThunk;
