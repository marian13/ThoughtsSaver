// https://redux-toolkit.js.org/tutorials/advanced-tutorial#store-setup-and-hmr

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

const configureAppStore = () => {
  const store = configureStore({ reducer: rootReducer });

  return store;
};

export default configureAppStore;
