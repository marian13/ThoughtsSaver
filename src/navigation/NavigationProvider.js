// https://reactnavigation.org/docs/hello-react-navigation/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '~/pages/LoginPage';
import { LOGIN_PAGE } from '~/pages/LoginPage/constants/identifiers';

import HomePage from '~/pages/HomePage';
import { HOME_PAGE } from '~/pages/HomePage/constants/identifiers';

import ThoughtTagsPage from '~/pages/ThoughtTagsPage';
import { THOUGHT_TAGS_PAGE } from '~/pages/ThoughtTagsPage/constants/identifiers';

const Stack = createStackNavigator();

const NavigationProvider = () => (
  <NavigationContainer initialRouteName={LOGIN_PAGE}>
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: 'Login' }}
        name={LOGIN_PAGE}
        component={LoginPage}
      />

      <Stack.Screen
        options={{ title: 'Home' }}
        name={HOME_PAGE}
        component={HomePage}
      />

      <Stack.Screen
        options={{ title: 'Thought Tags' }}
        name={THOUGHT_TAGS_PAGE}
        component={ThoughtTagsPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationProvider;
