import { none } from '@utils/arrays';
import { copySet } from '@utils/sets';

const addOrRemoveReducer = (set, element) => {
  set.has(element) ? set.delete(element) : set.add(element);

  return set;
};

const addOrRemove = (set, ...elements) => {
  if (none(elements)) return set;

  return elements.reduce(addOrRemoveReducer, copySet(set));
};

export default addOrRemove;
