import { startsWith } from 'lodash';

const isStringEndChanged = (str, prevStr) => startsWith(str, prevStr) || startsWith(prevStr, str);

export default isStringEndChanged;
