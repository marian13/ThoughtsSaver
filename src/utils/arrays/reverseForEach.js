const reverseForEach = (array, reverseForEachFunction) => {
  for (let i = array.length - 1; i >= 0; i--) reverseForEachFunction(array[i]);

  return array;
};

export default reverseForEach;
