import {
  finishSearchThoughtMode,
  startCreateThoughtMode
} from '@pages/HomePage/slice';

const cancelSearchThoughtThunk = () => dispatch => {
  dispatch(finishSearchThoughtMode());
  dispatch(startCreateThoughtMode());
};

export default cancelSearchThoughtThunk;
