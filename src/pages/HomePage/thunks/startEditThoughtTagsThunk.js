import { focus } from '@modules/FocusesModule/slice';
import { show, hide } from '@modules/VisibilitiesModule/slice';

import { setThoughtInEditDraft, setThoughtInEdit } from '@modals/AddThoughtTagsModal/slice';

const startEditThoughtTagsThunk = ({ thought }) => dispatch => {
  dispatch(hide(`thoughtMenu${thought.id}`));
  dispatch(show('addThoughtTagsModal'));
  dispatch(setThoughtInEditDraft({ thought }));
  dispatch(setThoughtInEdit({ thought }));

  // HACK
  // setTimeout can be very slow if `Debug Remote JS` is enabled.
  // Details: https://github.com/facebook/react-native/issues/20328
  //
  // To figure out why setTimeout is necessary here, see
  // https://stackoverflow.com/questions/61159324/react-native-how-to-open-the-keyboard-programmatically-after-closing-a-modal
  setTimeout(() => dispatch(focus('searchThoughtTagsInput')));
};

export default startEditThoughtTagsThunk;
