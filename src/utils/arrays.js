// https://api.rubyonrails.org/classes/Array.html#method-c-wrap
export const wrap = object => {
  if (object === undefined) return [];
  if (object === null) return [];
  if (Array.isArray(object)) return object;

  return [object];
};

export const empty = array => array.length === 0
export const any = array => array.length > 0;

export const addFirst = (array, elementToAdd) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToAdd) {
      return array;
    }
  }

  return [...array, elementToAdd];
};

export const removeFirst = (array, elementToRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToRemove) {
      const updatedArray = array.slice(0, i);

      updatedArray.push(...array.slice(i + 1, array.length));

      return updatedArray;
    }
  }

  return array;
};

export const removeMultipleFirst = (array, elementsToRemove) => {
  if (empty(elementsToRemove)) return array;

  let notRemovedElements = [...elementsToRemove];
  let notRemovedElement;

  const indices = [];

  for (let i = 0; i < array.length; i++) {
    [notRemovedElements, notRemovedElement] = findAndRemoveFirst(notRemovedElements, array[i]);

    if (notRemovedElement) indices.push(i);
    if (empty(notRemovedElements)) break;
  }

  if (any(indices)) {
    const updatedArray = array.slice(0, indices[0]);

    for (let i = 0; i < indices.length - 1; i++) {
      updatedArray.push(...array.slice(indices[i] + 1, indices[i + 1]));
    }

    updatedArray.push(...array.slice(indices[indices.length - 1] + 1, array.length));

    return updatedArray;
  }

  return array;
};

export const addOrRemoveFirst = (array, elementToAddOrRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToAddOrRemove) {
      const result = array.slice(0, i);

      result.push(...array.slice(i + 1, array.length));

      return result;
    }
  }

  return [...array, elementToAdd];
};

export const findAndRemoveFirst = (array, elementToFindAndRemove) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFindAndRemove) {
      const updatedArray = array.slice(0, i);

      updatedArray.push(...array.slice(i + 1, array.length))

      return [updatedArray, elementToFindAndRemove];
    }
  }

  return [array, null];
};
