import '#/specHelper';

import { createSet } from '~/utils/sets';

describe('createSet', () => {
  context('when no initial values passed', () => {
    it('returns empty set', () => {
      expect(createSet()).toEqual(new Set());
    });
  });

  context('when no initial values passed', () => {
    it('returns new set with initial values as values', () => {
      const initialValues = [1, 2, 3];

      expect(createSet(initialValues)).toEqual(new Set([1, 2, 3]));
    });
  });
});
