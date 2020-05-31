import none from '@utils/arrays/none';
import extract from '@utils/arrays/extract';
import reject from '@utils/arrays/reject';
import addDest from '@utils/arrays/addDest';

// Do NOT support elements as functions, since it is NOT clear what to add in such cases.
const addOrRemove = (array, ...elements) => {
  if (none(elements)) return array;

  const [removed, left] = extract(array, ...elements);
  const toAdd = reject(elements, ...removed);

  return addDest(left, ...toAdd);
};

export default addOrRemove;
