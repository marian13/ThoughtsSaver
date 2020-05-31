import { empty, addDest } from '@utils/arrays';

const createFilterMapReducer = filterMapFunction => (memo, element, index) => {
  const result = filterMapFunction(element, index);

  return result ? addDest(memo, result) : memo;
};

const filterMap = (array, filterMapFunction) => {
  if (empty(array)) return [];

  return array.reduce(createFilterMapReducer(filterMapFunction), []);
};

export default filterMap;
