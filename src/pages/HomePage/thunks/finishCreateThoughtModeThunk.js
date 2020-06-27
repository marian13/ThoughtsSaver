import {
  thoughtSelector,

  setThoughtInCreate,
  finishCreateThoughtMode
} from '~/pages/HomePage/slice';

const finishCreateThoughtModeThunk = () => (dispatch, getState) => {
  const thought = thoughtSelector(getState());

  dispatch(setThoughtInCreate({ thought }));

  dispatch(finishCreateThoughtMode());
};

export default finishCreateThoughtModeThunk;
