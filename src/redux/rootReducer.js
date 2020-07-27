// https://redux-toolkit.js.org/tutorials/advanced-tutorial#creating-the-root-reducer
// https://redux-toolkit.js.org/tutorials/advanced-tutorial#using-the-slice-reducer

import { combineReducers } from '@reduxjs/toolkit';

import ThoughtsModuleReducer from '@modules/ThoughtsModule/slice';
import TagsModuleReducer from '@modules/TagsModule/slice';

import HomePageReducer from '@pages/HomePage/slice';

import AddThoughtTagsModalReducer from '@modals/AddThoughtTagsModal/slice';

const rootReducer = combineReducers({
  ThoughtsModule: ThoughtsModuleReducer,
  TagsModule: TagsModuleReducer,

  HomePage: HomePageReducer,

  AddThoughtTagsModal: AddThoughtTagsModalReducer
});

export default rootReducer;
