import add from '@utils/sets/add';
import remove from '@utils/sets/remove';
import addOrRemove from '@utils/sets/addOrRemove';

export const createSet = (initialValues = []) => new Set(initialValues);
export const copySet = set => createSet(set);

export const has = (set, element) => set.has(element);

export {
  add,
  remove,
  addOrRemove
};
