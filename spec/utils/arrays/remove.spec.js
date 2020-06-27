import '#/specHelper';

import { remove } from '~/utils/arrays';

describe('remove', () => {
  it('supports element as function', () => {
    const array = [1, 2, 3, 4];
    const removeFunction = element => element === 4;

    expect(remove(array, removeFunction)).toEqual([1, 2, 3]);
  });

  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(remove(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    context('and array contains that element', () => {
      it('returns copy of original array without that element', () => {
        const array = [1, 2, 3, 4];
        const element = 4;

        expect(remove(array, element)).not.toBe(array);
        expect(remove(array, element)).toEqual([1, 2, 3]);
      });
    });

    context('and array does NOT contain that element', () => {
      it('returns copy of original array', () => {
        const array = [1, 2, 3, 4];
        const element = 5;

        expect(remove(array, element)).not.toBe(array);
        expect(remove(array, element)).toEqual([1, 2, 3, 4]);
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and array contains all those elements', () => {
      it('returns copy of original array without those elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [4, 5];

        expect(remove(array, ...elements)).not.toBe(array);
        expect(remove(array, ...elements)).toEqual([1, 2, 3]);
      });
    });

    context('and array contains some of those element', () => {
      it('returns copy of original array without those some elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [5, 6];

        expect(remove(array, ...elements)).not.toBe(array);
        expect(remove(array, ...elements)).toEqual([1, 2, 3, 4]);
      });
    });

    context('and array does NOT contains any of those element', () => {
      it('returns copy of original array', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [6, 7];

        expect(remove(array, ...elements)).not.toBe(array);
        expect(remove(array, ...elements)).toEqual([1, 2, 3, 4, 5]);
      });
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
