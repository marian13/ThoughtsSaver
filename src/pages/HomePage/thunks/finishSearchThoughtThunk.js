import {
  finishSearchThoughtMode,
  startCreateThoughtMode
} from '@pages/HomePage/slice';

const finishSearchThoughtThunk = () => dispatch => {
  dispatch(finishSearchThoughtMode());
  dispatch(startCreateThoughtMode());
};

export default finishSearchThoughtThunk;
