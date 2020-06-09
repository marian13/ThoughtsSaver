import React from 'react';

import ReduxProvider from './src/redux/ReduxProvider';

import HomePage from './src/pages/HomePage';

const App = () => (
  <ReduxProvider>
    <HomePage />
  </ReduxProvider>
);

export default App;
