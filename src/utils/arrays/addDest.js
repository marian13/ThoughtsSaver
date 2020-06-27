import none from '~/utils/arrays/none';

const addDest = (array, ...elements) => {
  if (none(elements)) return array;

  elements.forEach(element => array.push(element));

  return array;
};

export default addDest;
