import { isFunction } from '@utils/functions';
import none from '@utils/arrays/none';

const createRemoveReducerFilterFunction = element => (
  isFunction(element) ? item => !element(item) : item => item !== element
);

const removeReducer = (array, element) => array.filter(createRemoveReducerFilterFunction(element));

const remove = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeReducer, array);
};

export default remove;
