import { focus } from '@modules/FocusesModule/slice';
import { hide } from '@modules/VisibilitiesModule/slice';

import {
  finishCreateThoughtMode,
  startSearchThoughtByTextMode
} from '@pages/HomePage/slice';

import { GENERAL_THOUGHT_OPTIONS_MENU, SEARCH_THOUGHT_INPUT } from '@pages/HomePage/constants/identifiers';

const startSearchThoughtByTextThunk = () => dispatch => {
  dispatch(finishCreateThoughtMode());
  dispatch(hide(GENERAL_THOUGHT_OPTIONS_MENU));
  dispatch(startSearchThoughtByTextMode());

  // HACK
  // setTimeout can be very slow if `Debug Remote JS` is enabled.
  // Details: https://github.com/facebook/react-native/issues/20328
  //
  // To figure out why setTimeout is necessary here, see
  // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
  setTimeout(() => dispatch(focus(SEARCH_THOUGHT_INPUT)));
};

export default startSearchThoughtByTextThunk;
