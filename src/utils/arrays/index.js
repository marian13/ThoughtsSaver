import wrap from '@utils/arrays/wrap';
import add from '@utils/arrays/add';
import addDest from '@utils/arrays/addDest';
import remove from '@utils/arrays/remove';
import removeDest from '@utils/arrays/removeDest';
import addOrRemove from '@utils/arrays/addOrRemove';
import filterMap from '@utils/arrays/filterMap';
import reverseForEach from '@utils/arrays/reverseForEach';
import extract from '@utils/arrays/extract';
import reject from '@utils/arrays/reject';

export const empty = array => array.length === 0;

export const none = array => empty(array);

export const any = array => array.length > 0;

export {
  wrap,
  add,
  addDest,
  remove,
  removeDest,
  addOrRemove,
  filterMap,
  reverseForEach,
  extract,
  reject
};
