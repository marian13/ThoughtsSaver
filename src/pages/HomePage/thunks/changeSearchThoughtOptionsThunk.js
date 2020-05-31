import {
  searchThoughtOptionsSelector,
  searchThoughtInputTextSelector,

  changeSearchThoughtOptions
} from '@pages/HomePage/slice';

import changeSearchThoughtInputThunk from '@pages/HomePage/thunks/changeSearchThoughtInputThunk';

import { addOrRemove } from '@utils/arrays';

const changeSearchThoughtOptionsThunk = ({ option }) => (dispatch, getState) => {
  const options = searchThoughtOptionsSelector(getState());
  const text = searchThoughtInputTextSelector(getState());

  dispatch(changeSearchThoughtOptions({ options: addOrRemove(options, option) }));
  dispatch(changeSearchThoughtInputThunk({ text }));
};

export default changeSearchThoughtOptionsThunk;
