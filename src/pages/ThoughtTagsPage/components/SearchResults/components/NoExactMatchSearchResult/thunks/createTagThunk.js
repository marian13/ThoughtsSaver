import { generateUniqueId } from '@utils/generators';
import { now } from '@utils/dates';

import { tagSeletor, createTag } from '@modules/TagsModule/slice';

import {
  searchThoughtTagsTextSelector,
  searchThoughtTagsResultsSelector,

  changeSearchThoughtTagsResults,
  addTagToThought
} from '@pages/ThoughtTagsPage/slice';

const createTagThunk = () => (dispatch, getState) => {
  const text = searchThoughtTagsTextSelector(getState());

  const tagAttributes = {
    id: generateUniqueId(),
    text,
    createdAt: now()
  };

  dispatch(createTag({ tagAttributes }));

  const tag = tagSeletor({ id: tagAttributes.id })(getState());
  const searchResults = searchThoughtTagsResultsSelector(getState());

  dispatch(changeSearchThoughtTagsResults({
    exactMatchResult: tag,
    results: [...searchResults, tag]
  }));

  dispatch(addTagToThought({ tag }));
};

export default createTagThunk;
