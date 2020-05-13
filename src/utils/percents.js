import isNaN from 'lodash/isNaN';
import isString from 'lodash/isString';
import toNumber from 'lodash/toNumber';

// Example of percent string - '100%'.

export const percentStringToNumber = string => {
  if (!isString(string)) return NaN;
  if (!string.endsWith('%')) return NaN;

  const subString = string.slice(0, (string.length - 1));

  const number = toNumber(subString);

  if (number < 0 || number > 100) return NaN;

  return number;
};

export const isPercentString = percent => {
  return !isNaN(percentStringToNumber(percent));
};
