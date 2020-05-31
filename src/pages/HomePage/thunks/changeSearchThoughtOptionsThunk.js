import {
  searchThoughtOptionsSelector,

  changeSearchThoughtOptions
} from '@pages/HomePage/slice';

import { addOrRemove } from '@utils/arrays';

const changeSearchThoughtOptionsThunk = ({ option }) => (dispatch, getState) => {
  const options = searchThoughtOptionsSelector(getState());

  dispatch(changeSearchThoughtOptions({ options: addOrRemove(options, option) }));
};

export default changeSearchThoughtOptionsThunk;
