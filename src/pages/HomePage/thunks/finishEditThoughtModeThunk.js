import { resetThoughtInEdit, finishEditThoughtMode } from '@pages/HomePage/slice';

const finishEditThoughtModeThunk = () => dispatch => {
  dispatch(resetThoughtInEdit());

  dispatch(finishEditThoughtMode());
};

export default finishEditThoughtModeThunk;
