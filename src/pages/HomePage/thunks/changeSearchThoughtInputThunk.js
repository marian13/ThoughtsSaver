import { thoughtsSelector } from '@modules/ThoughtsModule/slice';

import {
  searchThoughtOptionsSelector,

  changeSearchThoughtInputText,
  changeSearchThoughtResults
} from '@pages/HomePage/slice';

const changeSearchThoughtInputThunk = ({ text: searchText }) => (dispatch, getState) => {
  const thoughts = thoughtsSelector(getState());
  const text = searchText.trim();
  const options = searchThoughtOptionsSelector(getState());

  dispatch(changeSearchThoughtInputText({ text: searchText }));

  // TODO results based on options
  const results = text ? thoughts.filter(thought => thought.text.includes(text)) : thoughts;

  dispatch(changeSearchThoughtResults({ results }));
};

export default changeSearchThoughtInputThunk;
