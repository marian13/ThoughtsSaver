import React from 'react';
import { useSelector } from 'react-redux';

import FlatList from '~/components/FlatList';

import Thought from '../Thought';

import { thoughtsSelector } from '~/modules/ThoughtsModule/slice';
import {
  isSearchThoughtModeSelector,
  searchThoughtTextSelector,
  searchThoughtResultsSelector,
} from '~/pages/HomePage/slice';

const ThoughtList = () => {
  const isSearchMode = useSelector(isSearchThoughtModeSelector);
  const searchInputText = useSelector(searchThoughtTextSelector);

  const thoughts = useSelector(thoughtsSelector);
  const searchResults = useSelector(searchThoughtResultsSelector);

  const items = isSearchMode && searchInputText ? searchResults : thoughts;
  const renderItem = ({ item }) => <Thought thought={item} />;

  return <FlatList scrollToBottomOnChange items={items} renderItem={renderItem} />;
};

export default ThoughtList;
