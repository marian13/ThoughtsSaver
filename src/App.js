// https://docs.expo.io/versions/latest/sdk/register-root-component/

import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';

import './globals';

import ReduxProvider from './redux/ReduxProvider';
import NavigationProvider from './navigation/NavigationProvider';

const App = () => (
  <ReduxProvider>
    <NavigationProvider />
  </ReduxProvider>
);

registerRootComponent(App);
