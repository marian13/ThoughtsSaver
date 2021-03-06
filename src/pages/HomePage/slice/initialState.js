import { SEARCH_THOUGHT_BY_TEXT_OPTION } from '~/pages/HomePage/constants/identifiers';

const initialState = {
  isCreateThoughtMode: false,
  isEditThoughtMode: false,
  isSearchThoughtMode: false,
  isThoughtPreviewMode: false,

  thought: {},
  thoughtInCreate: {},
  thoughtInEdit: {},

  searchThoughtText: '',
  searchThoughtResults: [],
  searchThoughtOptions: [SEARCH_THOUGHT_BY_TEXT_OPTION],
};

export default initialState;
