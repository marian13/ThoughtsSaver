import React from 'react';
import { Modal as NativeModal, StyleSheet } from 'react-native';

import Backdrop from '@components/Backdrop';
import Text from '@components/Text';
import View from '@components/View';

import { toBool } from '@utils/booleans';

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white'
  }
});

const renderAtLeastOnChild = ({ children })=> {
  if (React.Children.count(children) !== 0) return children;

  return <Text>{'Please, pass some children to <Modal />'}</Text>
};

const Modal = ({ isVisible, onBackdropPress, children }) => (
  /* HACK toBool(isVisible) is necessary here, because Modal `visible` prop treats `null` as truthy value. */
  <NativeModal visible={toBool(isVisible)} onRequestClose={onBackdropPress} transparent>
    <Backdrop onPress={onBackdropPress} />

    <View fullWidth hasShadow style={styles.view}>
      {renderAtLeastOnChild({ children })}
    </View>
  </NativeModal>
);

export default Modal;
