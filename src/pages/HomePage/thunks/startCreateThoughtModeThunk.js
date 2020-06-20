import {
  thoughtInCreateSelector,

  setThought,
  startCreateThoughtMode
} from '@pages/HomePage/slice';

const startCreateThoughtModeThunk = () => (dispatch, getState) => {
  const thoughtInCreate = thoughtInCreateSelector(getState());

  dispatch(setThought({ thought: thoughtInCreate }));

  dispatch(startCreateThoughtMode());
};

export default startCreateThoughtModeThunk;
