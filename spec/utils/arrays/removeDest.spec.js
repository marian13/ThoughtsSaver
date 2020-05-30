import '@specHelper';

import { removeDest } from '@utils/arrays';

describe('removeDest', () => {
  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(removeDest(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    it('returns modified original array without that element', () => {
      const array = [1, 2, 3, 4];
      const element = 4;

      const result = removeDest(array, element);

      expect(result).toBe(array);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  context('when multiple elements passed', () => {
    it('returns modified original array without those elements', () => {
      const array = [1, 2, 3, 4, 5];
      const elements = [4, 5];

      const result = removeDest(array, ...elements);

      expect(result).toBe(array);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  context('when array contains duplicates', () => {
    it('returns modified original array without duplicates', () => {
      const array = [1, 2, 2, 3, 3];
      const elements = [2, 3];

      expect(removeDest(array, ...elements)).toBe(array);
      expect(removeDest(array, ...elements)).toEqual([1]);
    });
  });
});
