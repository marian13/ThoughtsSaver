import '#/specHelper';

import { removeDest } from '~/utils/arrays';

describe('removeDest', () => {
  it('supports element as function', () => {
    const array = [1, 2, 3, 4];
    const removeDestFunction = element => element === 4;

    const result = removeDest(array, removeDestFunction);

    expect(result).toBe(array);
    expect(result).toEqual([1, 2, 3]);
  });

  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(removeDest(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    context('and array contains that element', () => {
      it('returns modified original array without that element', () => {
        const array = [1, 2, 3, 4];
        const element = 4;

        const result = removeDest(array, element);

        expect(result).toBe(array);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    context('and array does NOT contain that element', () => {
      it('returns original array', () => {
        const array = [1, 2, 3, 4];
        const element = 5;

        const result = removeDest(array, element);

        expect(result).toBe(array);
        expect(result).toEqual([1, 2, 3, 4]);
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and array contains all those elements', () => {
      it('returns modified original array without those elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [4, 5];

        const result = removeDest(array, ...elements);

        expect(result).toBe(array);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    context('and array contains some of those element', () => {
      it('returns modified original array without those some elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [5, 6];

        const result = removeDest(array, ...elements);

        expect(result).toBe(array);
        expect(result).toEqual([1, 2, 3, 4]);
      });
    });

    context('and array does NOT contains any of those element', () => {
      it('returns original array', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [6, 7];

        const result = removeDest(array, ...elements);

        expect(result).toBe(array);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  context('when array contains duplicates', () => {
    it('returns modified original array without duplicates', () => {
      const array = [1, 2, 2, 3, 3];
      const elements = [2, 3];

      const result = removeDest(array, ...elements);

      expect(result).toBe(array);
      expect(result).toEqual([1]);
    });
  });
});
