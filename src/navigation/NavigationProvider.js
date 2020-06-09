// https://reactnavigation.org/docs/hello-react-navigation/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';

const Stack = createStackNavigator();

const NavigationProvider = () => (
  <NavigationContainer initialRouteName="Login">
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationProvider;
