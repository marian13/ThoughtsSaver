import empty from '~/utils/arrays/empty';
import addDest from '~/utils/arrays/addDest';

const createFilterMapReducer = filterMapFunction => (memo, element, index) => {
  const result = filterMapFunction(element, index);

  return result ? addDest(memo, result) : memo;
};

const filterMap = (array, filterMapFunction) => {
  if (empty(array)) return [];

  return array.reduce(createFilterMapReducer(filterMapFunction), []);
};

export default filterMap;
