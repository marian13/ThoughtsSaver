import { changeSearchThoughtInputText } from '@pages/HomePage/slice';

const changeSearchThoughtInputThunk = ({ text: searchText }) => dispatch => {
  dispatch(changeSearchThoughtInputText({ text: searchText }));
};

export default changeSearchThoughtInputThunk;
