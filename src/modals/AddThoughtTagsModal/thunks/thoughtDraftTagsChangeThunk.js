import {
  addTagToThoughtDraft,
  removeTagFromThoughtDraft
} from '@modals/AddThoughtTagsModal/slice';

const thoughtDraftTagsChangeThunk = ({ selected, tag }) => dispatch => {
  if (selected) {
    dispatch(addTagToThoughtDraft({ tag }));
  } else {
    dispatch(removeTagFromThoughtDraft({ tag }));
  }
};

export default thoughtDraftTagsChangeThunk;
