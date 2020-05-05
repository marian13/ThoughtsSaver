import {
  addTagToThoughtInEditDraft,
  removeTagFromThoughtInEditDraft
} from '@modals/AddThoughtTagsModal/slice';

const changeThoughtInEditDraftTagsThunk = ({ selected, tag }) => dispatch => {
  if (selected) {
    dispatch(addTagToThoughtInEditDraft({ tag }));
  } else {
    dispatch(removeTagFromThoughtInEditDraft({ tag }));
  }
};

export default changeThoughtInEditDraftTagsThunk;
