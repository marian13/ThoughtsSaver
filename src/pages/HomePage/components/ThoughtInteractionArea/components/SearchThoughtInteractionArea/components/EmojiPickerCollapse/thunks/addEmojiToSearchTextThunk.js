import { searchThoughtTextSelector, addEmojiToSearchThoughtText } from '@pages/HomePage/slice';

import changeSearchThoughtTextThunk from '@pages/HomePage/components/ThoughtInteractionArea/components/SearchThoughtInteractionArea/thunks/changeSearchThoughtTextThunk';

const addEmojiToSearchTextThunk = ({ emoji }) => (dispatch, getState) => {
  dispatch(addEmojiToSearchThoughtText({ emoji }));

  const text = searchThoughtTextSelector(getState());

  dispatch(changeSearchThoughtTextThunk({ text }));
};

export default addEmojiToSearchTextThunk;
