import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';

import { isArray, isUndefined, entries } from 'lodash';

const defaultDefaultPropForPropType = propType => {
  switch (propType) {
    case PropTypes.bool: return false;
    case PropTypes.number: return 0;
    case PropTypes.string: return '';
    case PropTypes.array: return [];
    case PropTypes.object: return {};
    case PropTypes.func: return () => {};
    case PropTypes.node: return null;
    case PropTypes.elementType: return null;
    case PropTypes.any: return null;
    case ViewPropTypes.style: return {};
    // TODO throw on Unknown PropType with reasonable message.
    // default: throw `Unknown PropType ${propType}. Please, check createPropTypes call.`;
  }
};

const createPropTypesReducer = ([propTypes, defaultProps], [key, value]) => {
  const [propType, defaultProp] = isArray(value) ? value : [value];

  propTypes[key] = propType;
  defaultProps[key] = !isUndefined(defaultProp) ? defaultProp : defaultDefaultPropForPropType(propType);

  return [propTypes, defaultProps];
};

export const createPropTypes = propTypesWithDefaults => (
  entries(propTypesWithDefaults).reduce(createPropTypesReducer, [{}, {}])
);

export { PropTypes, ViewPropTypes };
