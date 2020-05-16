import { thoughtsSelector } from '@modules/ThoughtsModule/slice';

import { changeSearchThoughtInputText, changeSearchThoughtResults } from '@pages/HomePage/slice';

const changeSearchThoughtInputThunk = ({ text: searchText }) => (dispatch, getState) => {
  const thoughts = thoughtsSelector(getState());
  const text = searchText.trim();

  dispatch(changeSearchThoughtInputText({ text: searchText }));

  const results = text ? thoughts.filter(thought => thought.text.includes(text)) : thoughts;

  dispatch(changeSearchThoughtResults({ results }));
};

export default changeSearchThoughtInputThunk;
