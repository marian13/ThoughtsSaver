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

const removeReducer = (array, element) => array.filter(item => item !== element);

export const remove = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeReducer, array);
};

const removeDestReducer = (array, element) => {
  const indices = filterMap(array, (item, index) => item === element && index);

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
const extractReducer = ([extracted, nonextracted, array], element) => {
  array.forEach(item => item === element ? addDest(extracted, item) : addDest(nonextracted, item));

  return [extracted, [], nonextracted];
};

export const extract = (array, ...elements) => {
  if (none(elements)) return [[], array];

  const [extracted, _, nonextracted] = elements.reduce(extractReducer, [[], [], array]);

  return [extracted, nonextracted];
};

export const addOrRemove = (array, ...elements) => {
  if (none(elements)) return array;

  const [removed, left] = extract(array, ...elements);
  // TODO Optimization remove which returns deleted elements
  const [_, toAdd] = extract(elements, ...removed);

  return addDest(left, ...toAdd);
};
