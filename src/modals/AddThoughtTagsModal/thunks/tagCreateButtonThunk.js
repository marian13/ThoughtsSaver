import { generateUniqueId } from '@utils/generators';
import { now } from '@utils/dates';

import {
  tagSeletor,

  createTag
} from '@modules/TagsModule/slice';

import {
  searchThoughtTagsInputTextSelector,
  searchThoughtTagsInputResultsSelector,

  changeThoughtTagsSearchResults,
  addTagToThoughtInEditDraft
} from '@modals/AddThoughtTagsModal/slice';

const tagCreateButtonThunk = () => (dispatch, getState) => {
  const text = searchThoughtTagsInputTextSelector(getState());

  const tagAttributes = {
    id: generateUniqueId(),
    text,
    createdAt: now()
  };

  dispatch(createTag({ tagAttributes }));

  const tag = tagSeletor({ id: tagAttributes.id })(getState());
  const searchResults = searchThoughtTagsInputResultsSelector(getState());

  dispatch(changeThoughtTagsSearchResults({
    exactMatchResult: tag,
    results: [...searchResults, tag]
  }));

  dispatch(addTagToThoughtInEditDraft({ tag }));
};

export default tagCreateButtonThunk;
