import { addTagToThought, removeTagFromThought } from '~/pages/ThoughtTagsPage/slice';

const changeThoughtTagsThunk = ({ selected, tag }) => dispatch => {
  if (selected) {
    dispatch(addTagToThought({ tag }));
  } else {
    dispatch(removeTagFromThought({ tag }));
  }
};

export default changeThoughtTagsThunk;
