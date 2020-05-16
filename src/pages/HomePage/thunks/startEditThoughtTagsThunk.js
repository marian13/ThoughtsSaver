import { show, hide } from '@modules/VisibilitiesModule/slice';

import { setThoughtInEditDraft, setThoughtInEdit } from '@modals/AddThoughtTagsModal/slice';

import { dispatchFocus } from '@utils/dispatch';

const startEditThoughtTagsThunk = ({ thought }) => dispatch => {
  dispatch(hide(`thoughtMenu${thought.id}`));
  dispatch(show('addThoughtTagsModal'));
  dispatch(setThoughtInEditDraft({ thought }));
  dispatch(setThoughtInEdit({ thought }));
  dispatchFocus(dispatch, 'searchThoughtTagsInput');
};

export default startEditThoughtTagsThunk;
