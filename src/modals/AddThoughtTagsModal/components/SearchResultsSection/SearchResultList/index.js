import React from 'react';
import { ScrollView, View } from 'react-native';

const SearchResultList = ({
  searchResults,
  SearchResultContainer,
  NoExactMatchSearchResultContainer,
  ...rest
}) => (
  <View>
    <ScrollView>
      {searchResults.map(searchResult => (
        <SearchResultContainer
          key={searchResult.text}
          {...rest}
          searchResult={searchResult}
        />
      ))}
      <NoExactMatchSearchResultContainer />
    </ScrollView>
  </View>
);

export default SearchResultList;
