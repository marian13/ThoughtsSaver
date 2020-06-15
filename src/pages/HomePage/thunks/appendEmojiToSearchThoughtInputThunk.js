import {
  searchThoughtInputTextSelector,

  appendEmojiToSearchThoughtInputText
} from '@pages/HomePage/slice';

import changeSearchThoughtInputThunk from '@pages/HomePage/thunks/changeSearchThoughtInputThunk';

const appendEmojiToSearchThoughtInputThunk = ({ emoji }) => (dispatch, getState) => {
  dispatch(appendEmojiToSearchThoughtInputText({ emoji }));

  const text = searchThoughtInputTextSelector(getState());

  dispatch(changeSearchThoughtInputThunk({ text }));
};

export default appendEmojiToSearchThoughtInputThunk;
