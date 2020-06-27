import finishEditThoughtModeThunk from '~/pages/HomePage/thunks/finishEditThoughtModeThunk';
import startCreateThoughtModeThunk from '~/pages/HomePage/thunks/startCreateThoughtModeThunk';

const cancelEditThoughtThunk = () => dispatch => {
  dispatch(finishEditThoughtModeThunk());
  dispatch(startCreateThoughtModeThunk());
};

export default cancelEditThoughtThunk;
