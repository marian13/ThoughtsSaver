// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

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
