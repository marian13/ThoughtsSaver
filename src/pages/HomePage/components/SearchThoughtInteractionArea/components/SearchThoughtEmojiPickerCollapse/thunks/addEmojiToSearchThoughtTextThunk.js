import { searchThoughtTextSelector, addEmojiToSearchThoughtText } from '@pages/HomePage/slice';

import changeSearchThoughtTextThunk from '@pages/HomePage/components/SearchThoughtInteractionArea/thunks/changeSearchThoughtTextThunk';

const addEmojiToSearchThoughtTextThunk = ({ emoji }) => (dispatch, getState) => {
  dispatch(addEmojiToSearchThoughtText({ emoji }));

  const text = searchThoughtTextSelector(getState());

  dispatch(changeSearchThoughtTextThunk({ text }));
};

export default addEmojiToSearchThoughtTextThunk;
