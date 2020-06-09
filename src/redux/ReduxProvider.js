// https://redux-toolkit.js.org/tutorials/advanced-tutorial#rendering-the-provider

import React from 'react';
import { Provider } from 'react-redux';

import configureAppStore from './configureAppStore';
import initThunk from './initThunk';

const store = configureAppStore();

store.dispatch(initThunk());

const ReduxProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
