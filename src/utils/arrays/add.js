import none from '@utils/arrays/none';

const add = (array, ...elements) => {
  if (none(elements)) return array;

  return array.concat(elements);
};

export default add;
