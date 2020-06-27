import { none } from '~/utils/arrays';
import copySet from '~/utils/sets/copySet';

const removeReducer = (set, element) => {
  set.delete(element);

  return set;
};

const remove = (set, ...elements) => {
  if (none(elements)) return set;

  return elements.reduce(removeReducer, copySet(set));
};

export default remove;
