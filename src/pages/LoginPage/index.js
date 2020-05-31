import React from 'react';
import { StyleSheet } from 'react-native';

import Page from '@components/Page';
import View from '@components/View';
import Button from '@components/Button';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center'
  },
  view: {
    paddingVertical: 10,
    width: '80%'
  }
});

const LoginPage = () => (
  <Page style={styles.page}>
    <View fullWidth centered>
      <View style={styles.view}>
        <Button outline iconName="facebook" text="Sign in with Facebook" />
      </View>

      <View style={styles.view}>
        <Button outline iconName="google" text="Sign in with Google" />
      </View>
    </View>
  </Page>
);

export default LoginPage;
