import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Page from '~/components/Page';
import View from '~/components/View';
import Button from '~/components/Button';

import { HOME_PAGE } from '~/pages/HomePage/constants/identifiers';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center'
  },
  view: {
    paddingVertical: 10,
    width: '80%'
  }
});

const LoginPage = () => {
  const { navigate } = useNavigation();

  return (
    <Page style={styles.page}>
      <View fullWidth centered>
        <View style={styles.view}>
          <Button
            outline
            iconName="facebook"
            text="Sign in with Facebook"
            onPress={() => navigate(HOME_PAGE)}
          />
        </View>

        <View style={styles.view}>
          <Button
            outline
            iconName="google"
            text="Sign in with Google"
            onPress={() => navigate(HOME_PAGE)}
          />
        </View>
      </View>
    </Page>
  );
};

export default LoginPage;
