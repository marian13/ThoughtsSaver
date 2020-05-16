import { some, size } from 'lodash';

import { tagsSelector } from '@modules/TagsModule/slice';

import { changeSearchThoughtTagsInputText, changeSearchThoughtTagsResults } from '@modals/AddThoughtTagsModal/slice';

const changeSearchThoughtTagsInputThunk = ({ text: searchText }) => (dispatch, getState) => {
  const tags = tagsSelector(getState());
  const text = searchText.trim();

  dispatch(changeSearchThoughtTagsInputText({ text: searchText }));

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

export default changeSearchThoughtTagsInputThunk;
