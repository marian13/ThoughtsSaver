import { isFunction } from '@utils/functions';
import addOrRemove from '@utils/arrays/addOrRemove';

// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export const empty = array => array.length === 0;

export const none = array => empty(array);

export const any = array => array.length > 0;

export const add = (array, ...elements) => {
  if (none(elements)) return array;

  return array.concat(elements);
};

export const addDest = (array, ...elements) => {
  if (none(elements)) return array;

  elements.forEach(element => array.push(element));

  return array;
};

const createRemoveReducerFilterFunction = element => (
  isFunction(element) ? item => !element(item) : item => item !== element
);

const removeReducer = (array, element) => array.filter(createRemoveReducerFilterFunction(element));

export const remove = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeReducer, array);
};

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

export const removeDest = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeDestReducer, array);
};

const filterMapReducer = filterMapFunction => (memo, element, index) => {
  const result = filterMapFunction(element, index);

  return result ? addDest(memo, result) : memo;
};

export const filterMap = (array, filterMapFunction) => {
  if (empty(array)) return [];

  return array.reduce(filterMapReducer(filterMapFunction), []);
};

export const reverseForEach = (array, reverseForEachFunction) => {
  for (let i = array.length - 1; i >= 0; i--) reverseForEachFunction(array[i]);

  return array;
};

// Basic idea is taken from https://api.rubyonrails.org/classes/Array.html#method-i-extract-21
const createExtractReducerForEachFunction = ([extracted, nonextracted], element) => {
  if (isFunction(element)) {
    return item => element(item) ? addDest(extracted, item) : addDest(nonextracted, item);
  } else {
    return item => item === element ? addDest(extracted, item) : addDest(nonextracted, item);
  }
};

const extractReducer = ([extracted, nonextracted, array], element) => {
  array.forEach(createExtractReducerForEachFunction([extracted, nonextracted, array], element));

  return [extracted, [], nonextracted];
};

export const extract = (array, ...elements) => {
  if (none(elements)) return [[], array];

  const [extracted, _, nonextracted] = elements.reduce(extractReducer, [[], [], array]);

  return [extracted, nonextracted];
};

const rejectReducer = (array, element) => array.filter(item => item !== element);

export const reject = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(rejectReducer, array);
};

export { addOrRemove };
