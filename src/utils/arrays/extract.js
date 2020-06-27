// Basic idea is taken from https://api.rubyonrails.org/classes/Array.html#method-i-extract-21
// But this version also removes duplicates
import isFunction from '~/utils/functions/isFunction';
import none from '~/utils/arrays/none';
import addDest from '~/utils/arrays/addDest';

const createExtractReducerForEachFunction = ([extracted, nonextracted], element) => {
  if (isFunction(element)) {
    return item => element(item) ? addDest(extracted, item) : addDest(nonextracted, item);
  } else {
    return item => item === element ? addDest(extracted, item) : addDest(nonextracted, item);
  }
};

const extractReducer = ([extracted, nonextracted, array], element) => {
  array.forEach(createExtractReducerForEachFunction([extracted, nonextracted, array], element));

  return [extracted, [], nonextracted];
};

const extract = (array, ...elements) => {
  if (none(elements)) return [[], array];

  const [extracted, _, nonextracted] = elements.reduce(extractReducer, [[], [], array]);

  return [extracted, nonextracted];
};

export default extract;
