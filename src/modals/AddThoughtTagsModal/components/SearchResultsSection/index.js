import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchResultList from './SearchResultList';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const SearchResultsSection = ({ searchResults, ...rest }) => (
  <View style={styles.view}>
    <SearchResultList {...rest} searchResults={searchResults} />
  </View>
);

export default SearchResultsSection;
