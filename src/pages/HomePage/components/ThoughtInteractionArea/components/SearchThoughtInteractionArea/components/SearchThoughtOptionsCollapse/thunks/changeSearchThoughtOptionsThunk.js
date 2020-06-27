import {
  searchThoughtOptionsSelector,
  searchThoughtTextSelector,

  changeSearchThoughtOptions
} from '~/pages/HomePage/slice';

import changeSearchThoughtTextThunk from '~/pages/HomePage/components/ThoughtInteractionArea/components/SearchThoughtInteractionArea/thunks/changeSearchThoughtTextThunk';

import { addOrRemove } from '~/utils/arrays';

const changeSearchThoughtOptionsThunk = ({ option }) => (dispatch, getState) => {
  const options = searchThoughtOptionsSelector(getState());
  const text = searchThoughtTextSelector(getState());

  dispatch(changeSearchThoughtOptions({ options: addOrRemove(options, option) }));
  dispatch(changeSearchThoughtTextThunk({ text }));
};

export default changeSearchThoughtOptionsThunk;
