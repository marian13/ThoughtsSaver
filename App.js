import React from 'react';

import ReduxProvider from './src/redux/ReduxProvider';
import NavigationProvider from './src/navigation/NavigationProvider';

const App = () => (
  <ReduxProvider>
    <NavigationProvider />
  </ReduxProvider>
);

export default App;
