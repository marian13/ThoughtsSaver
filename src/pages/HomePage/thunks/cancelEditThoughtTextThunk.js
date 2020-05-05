import {
  finishEditThoughtTextMode,
  startCreateThoughtMode,

  resetThoughtInEditDraft,
  resetThoughtInEdit
} from '@pages/HomePage/slice';

const cancelEditThoughtTextThunk = () => dispatch => {
  dispatch(finishEditThoughtTextMode());
  dispatch(startCreateThoughtMode());

  dispatch(resetThoughtInEditDraft());
  dispatch(resetThoughtInEdit());
};

export default cancelEditThoughtTextThunk;
