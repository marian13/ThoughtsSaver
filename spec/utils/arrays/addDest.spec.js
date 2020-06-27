import '#/specHelper';

import { addDest } from '~/utils/arrays';

describe('addDest', () => {
  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(addDest(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    it('returns modified original array with that element', () => {
      const array = [1, 2, 3];
      const element = 4;

      const result = addDest(array, element);

      expect(result).toBe(array);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  context('when multiple elements passed', () => {
    it('returns modified original array with those elements', () => {
      const array = [1, 2, 3];
      const elements = [4, 5];

      const result = addDest(array, ...elements);

      expect(result).toBe(array);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
