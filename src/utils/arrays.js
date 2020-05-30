// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export const none = array => array.length === 0;

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
  const index = array.findIndex(item => item === element);

  if (index >= 0) array.splice(index, 1);

  return array;
}

export const removeDest = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(removeDestReducer, array);
};
