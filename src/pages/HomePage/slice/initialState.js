import { SEARCH_THOUGHT_BY_TEXT_OPTION } from '@pages/HomePage/constants/identifiers';

const initialState = {
  isCreateThoughtMode: false,
  isEditThoughtTextMode: false,
  isSearchThoughtMode: false,

  thoughtInCreateDraft: {},
  thoughtInEditDraft: {},
  thoughtInEdit: {},

  searchThoughtInputText: '',
  searchThoughtResults: [],
  searchThoughtOptions: [SEARCH_THOUGHT_BY_TEXT_OPTION]
};

export default initialState;
