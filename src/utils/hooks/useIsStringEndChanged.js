import usePreviousValue from '~/utils/hooks/usePreviousValue';

import isStringEndChanged from '~/utils/strings/isStringEndChanged';

const useIsStringEndChanged = str => {
  const prevStr = usePreviousValue(str);

  return isStringEndChanged(str, prevStr);
};

export default useIsStringEndChanged;


