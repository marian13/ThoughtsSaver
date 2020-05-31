import { none } from '@utils/arrays';
import copySet from '@utils/sets/copySet';

const addReducer = (set, element) => set.add(element);

const add = (set, ...elements) => {
  if (none(elements)) return set;

  return elements.reduce(addReducer, copySet(set));
};

export default add;
