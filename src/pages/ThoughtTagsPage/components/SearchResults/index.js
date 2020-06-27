import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import FlatList from '@components/FlatList';
import View from '@components/View';

import SearchResult from './components/SearchResult';
import NoExactMatchSearchResult from './components/NoExactMatchSearchResult';

import { searchThoughtTagsResultsSelector } from '@pages/ThoughtTagsPage/slice';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

const renderSearchResult = ({ item }) => <SearchResult tag={item} />;

const SearchResults = () => {
  const searchResults = useSelector(searchThoughtTagsResultsSelector);

  return (
    <View style={styles.view}>
      <FlatList
        scrollToBottomOnChange
        items={searchResults}
        renderItem={renderSearchResult}
        ListFooterComponent={NoExactMatchSearchResult}
      />
    </View>
  );
};

export default SearchResults;
