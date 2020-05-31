import empty from '@utils/arrays/empty';
import toBool from '@utils/booleans/toBool';

const has = (array, element) => {
  if (empty(array)) return false;

  return toBool(array.find(item => item === element));
};

export default has;
