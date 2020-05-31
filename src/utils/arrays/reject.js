import none from '@utils/arrays/none';

const rejectReducer = (array, element) => array.filter(item => item !== element);

const reject = (array, ...elements) => {
  if (none(elements)) return array;

  return elements.reduce(rejectReducer, array);
};

export default reject;
