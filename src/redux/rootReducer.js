// https://redux-toolkit.js.org/tutorials/advanced-tutorial#creating-the-root-reducer
// https://redux-toolkit.js.org/tutorials/advanced-tutorial#using-the-slice-reducer

import { combineReducers } from '@reduxjs/toolkit';

import ThoughtsModuleReducer from '@modules/ThoughtsModule/slice';
import TagsModuleReducer from '@modules/TagsModule/slice';

import FocusesModuleReducer from '@modules/FocusesModule/slice';
import VisibilitiesModuleReducer from '@modules/VisibilitiesModule/slice';

import HomePageReducer from '@pages/HomePage/slice';
import ThoughtTagsPageReducer from '@pages/ThoughtTagsPage/slice';

const rootReducer = combineReducers({
  ThoughtsModule: ThoughtsModuleReducer,
  TagsModule: TagsModuleReducer,

  FocusesModule: FocusesModuleReducer,
  VisibilitiesModule: VisibilitiesModuleReducer,

  HomePage: HomePageReducer,
  ThoughtTagsPage: ThoughtTagsPageReducer
});

export default rootReducer;
