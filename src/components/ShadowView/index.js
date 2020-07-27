import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { compact } from 'lodash';

const styles = StyleSheet.create({
  view: {
    // https://github.com/react-native-elements/react-native-elements/blob/v1.2.7/src/overlay/Overlay.js#L115
    backgroundColor: 'white',
    borderRadius: 3,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowRadius: 4
      }
    })
  }
});

const ShadowView = ({ hideShadow, children, style }) => (
  <View style={compact([!hideShadow && styles.view, style])}>
    {children}
  </View>
);

export default ShadowView;
