// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export const empty = array => array.length === 0
export const any = array => array.length > 0;

export const add = (array, elementToAdd) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToAdd) {
      return array;
    }
  }

  return [...array, elementToAdd];
};

export const remove = (array, elementToRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToRemove) {
      return array.slice(0, i).concat(array.slice(i + 1, array.length));
    }
  }

  return array;
};

export const addOrRemove = (array, elementToAddOrRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToAddOrRemove) {
      return array.slice(0, i).concat(array.slice(i + 1, array.length));
    }
  }

  return [...array, elementToAdd];
};

export const find = (array, elementToFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFind) {
      return elementToFind;
    }
  }

  return null;
};

export const findAndRemove = (array, elementToFindAndRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFindAndRemove) {
      return [array.slice(0, i).concat(array.slice(i + 1, array.length)), elementToFindAndRemove];
    }
  }

  return [array, null];
};
