import '#/specHelper';

import { add } from '~/utils/arrays';

describe('add', () => {
  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(add(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    it('returns copy of original array with that element', () => {
      const array = [1, 2, 3];
      const element = 4;

      expect(add(array, element)).not.toBe(array);
      expect(add(array, element)).toEqual([1, 2, 3, 4]);
    });
  });

  context('when multiple elements passed', () => {
    it('returns copy of original array with those elements', () => {
      const array = [1, 2, 3];
      const elements = [4, 5];

      expect(add(array, ...elements)).not.toBe(array);
      expect(add(array, ...elements)).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
