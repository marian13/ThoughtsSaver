import { generateUniqueId } from '@utils/generators';
import { now } from '@utils/dates';

import {
  tagSeletor,

  createTag
} from '@modules/TagsModule/slice';

import {
  thoughtTagsSearchTextSelector,
  thoughtTagsSearchResultsSelector,

  changeThoughtTagsSearchResults,
  addTagToThoughtInEditDraft
} from '@modals/AddThoughtTagsModal/slice';

const tagCreateButtonThunk = () => (dispatch, getState) => {
  const text = thoughtTagsSearchTextSelector(getState());

  const tagAttributes = {
    id: generateUniqueId(),
    text,
    createdAt: now()
  };

  dispatch(createTag({ tagAttributes }));

  const tag = tagSeletor({ id: tagAttributes.id })(getState());
  const searchResults = thoughtTagsSearchResultsSelector(getState());

  dispatch(changeThoughtTagsSearchResults({
    exactMatchResult: tag,
    results: [...searchResults, tag]
  }));

  dispatch(addTagToThoughtInEditDraft({ tag }));
};

export default tagCreateButtonThunk;
