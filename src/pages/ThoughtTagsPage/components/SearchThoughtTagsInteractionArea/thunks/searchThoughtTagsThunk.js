import { tagsSelector } from '~/modules/TagsModule/slice';
import { changeSearchThoughtTagsText, changeSearchThoughtTagsResults } from '~/pages/ThoughtTagsPage/slice';

import { some } from 'lodash';
import { size } from '~/utils/arrays';

const searchThoughtTagsThunk = ({ text: searchText }) => (dispatch, getState) => {
  const tags = tagsSelector(getState());
  const text = searchText.trim();

  dispatch(changeSearchThoughtTagsText({ text: searchText }));

  let exactMatchResult = {};
  const results = [];

  if (text) {
    for (let i = 0; i < size(tags); i++) {
      const tag = tags[i];

      if (!some(exactMatchResult) && tag.text === text) exactMatchResult = tag;
      if (tag.text.includes(text)) results.push(tag);
    }
  }

  dispatch(changeSearchThoughtTagsResults({ exactMatchResult, results }));
};

export default searchThoughtTagsThunk;
