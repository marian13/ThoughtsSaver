import {
  setThought,
  setThoughtInEdit,
  startEditThoughtMode
} from '@pages/HomePage/slice';

const startEditThoughtModeThunk = ({ thought }) => dispatch => {
  dispatch(setThought({ thought }));

  dispatch(setThoughtInEdit({ thought }));

  dispatch(startEditThoughtMode());
};

export default startEditThoughtModeThunk;
