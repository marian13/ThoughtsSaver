import {
  resetThought,
  resetThoughtInEdit,
  resetSearchThoughtTagsText,
  resetSearchThoughtTagsResults
} from '@pages/ThoughtTagsPage/slice';

const resetThunk = () => dispatch => {
  dispatch(resetThought());
  dispatch(resetThoughtInEdit());
  dispatch(resetSearchThoughtTagsText());
  dispatch(resetSearchThoughtTagsResults());
};

export default resetThunk;
