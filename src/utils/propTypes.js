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
    case ViewPropTypes.style: return {};
  }
};

export const createPropTypes = propTypesWithDefaults => {
  return entries(propTypesWithDefaults).reduce(([propTypes, defaultProps], [key, value]) => {
    const [propType, defaultProp] = isArray(value) ? value : [value];

    propTypes[key] = propType;
    defaultProps[key] =
      !isUndefined(defaultProp) ? defaultProp : defaultDefaultPropForPropType(propType);

    return [propTypes, defaultProps];
  }, [{}, {}]);
};

export { PropTypes };
