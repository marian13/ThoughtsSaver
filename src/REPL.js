// https://docs.expo.io/versions/latest/sdk/register-root-component/

import registerRootComponent from 'expo/build/launch/registerRootComponent';

import React from 'react';

import '~/globals';

import Text from '~/components/Text';
import View from '~/components/View';

const REPL = () => (
  <View fullWidth fullHeight centered>
    <Text large>REPL</Text>
  </View>
);

registerRootComponent(REPL);
