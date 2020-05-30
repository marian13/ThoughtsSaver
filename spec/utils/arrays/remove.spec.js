import '@specHelper';

import { remove } from '@utils/arrays';

describe('remove', () => {
  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(remove(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    it('returns copy of original array without that element', () => {
      const array = [1, 2, 3, 4];
      const element = 4;

      expect(remove(array, element)).not.toBe(array);
      expect(remove(array, element)).toEqual([1, 2, 3]);
    });
  });

  context('when multiple elements passed', () => {
    it('returns copy of original array without those elements', () => {
      const array = [1, 2, 3, 4, 5];
      const elements = [4, 5];

      expect(remove(array, ...elements)).not.toBe(array);
      expect(remove(array, ...elements)).toEqual([1, 2, 3]);
    });
  });

  context('when array contains duplicates', () => {
    it('returns copy of original array without duplicates', () => {
      const array = [1, 2, 2, 3, 3];
      const elements = [2, 3];

      expect(remove(array, ...elements)).not.toBe(array);
      expect(remove(array, ...elements)).toEqual([1]);
    });
  });
});
