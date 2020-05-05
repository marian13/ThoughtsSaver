// https://redux-toolkit.js.org/tutorials/advanced-tutorial#rendering-the-provider

import React from 'react';
import { Provider } from 'react-redux';

import HomePage from './src/pages/HomePage';

import configureAppStore from './src/redux/configureAppStore';
import initThunk from './src/redux/initThunk';

const store = configureAppStore();

store.dispatch(initThunk());

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
