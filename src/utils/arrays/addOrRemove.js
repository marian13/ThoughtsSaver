import {
  none,
  extract,
  reject,
  addDest
} from '@utils/arrays';

// Do NOT support elements as functions, since it is NOT clear what to add in such cases.
const addOrRemove = (array, ...elements) => {
  if (none(elements)) return array;

  const [removed, left] = extract(array, ...elements);
  const toAdd = reject(elements, ...removed);

  return addDest(left, ...toAdd);
};

export default addOrRemove;
