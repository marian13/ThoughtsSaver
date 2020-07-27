// https://redux-toolkit.js.org/tutorials/advanced-tutorial#rendering-the-provider

import React from 'react';
import { Provider } from 'react-redux';

import HomePage from './src/pages/HomePage';

import configureAppStore from './src/redux/configureAppStore';

const store = configureAppStore();

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
