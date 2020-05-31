import { isFunction } from '@utils/functions';
import none from '@utils/arrays/none';
import filterMap from '@utils/arrays/filterMap';
import reverseForEach from '@utils/arrays/reverseForEach';

const createRemoveDestReducerFilterMapFunction = element => {
  if (isFunction(element)) {
    return (item, index) => element(item) && index;
  } else {
    return (item, index) => item === element && index;
  }
};

const removeDestReducer = (array, element) => {
  const indices = filterMap(array, createRemoveDestReducerFilterMapFunction(element));

  reverseForEach(indices, index => array.splice(index, 1));

  return array;
};

const removeDest = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeDestReducer, array);
};

export default removeDest;
