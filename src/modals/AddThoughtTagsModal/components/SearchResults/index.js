import React from 'react';
import { StyleSheet, View } from 'react-native';

import VerticalFlatList from '@components/VerticalFlatList';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const SearchResults = ({
  searchResults,
  SearchResultContainer,
  NoExactMatchSearchResultContainer
}) => {
  const renderSearchResult = ({ item: searchResult }) => (
    <SearchResultContainer searchResult={searchResult} />
  );

  return (
    <View style={styles.view}>
      <VerticalFlatList
        scrollToBottomOnChange
        items={searchResults}
        renderItem={renderSearchResult}
        ListFooterComponent={NoExactMatchSearchResultContainer}
      />
    </View>
  );
};

export default SearchResults;
