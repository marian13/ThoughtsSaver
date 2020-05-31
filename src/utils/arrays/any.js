import isFunction from '@utils/functions/isFunction';
import toBool from '@utils/booleans/toBool';
import isUndefined from '@utils/undefined/isUndefined';

export class AnyFunctionError extends Error {};

const throwAnyFunctionError = () => {
  throw new AnyFunctionError('Function passed to any is not a function.');
};

const any = (array, anyFunction) => {
  if (isFunction(anyFunction)) return toBool(array.find(anyFunction));

  if (!isUndefined(anyFunction)) throwAnyFunctionError();

  return array.length > 0;
};

export default any;
