import isFunction from '@utils/functions/isFunction';
import none from '@utils/arrays/none';

const createFilterReducerFilterFunction = element => (
  isFunction(element) ? item => element(item) : item => item === element
);

const filterReducer = (array, element) => array.filter(createFilterReducerFilterFunction(element));

const filter = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(filterReducer, array);
};

export default filter;
