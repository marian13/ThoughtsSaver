import '@specHelper';

import { addOrRemove } from '@utils/arrays';

describe('addOrRemove', () => {
  context('when no elements passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3];

      expect(addOrRemove(array)).toBe(array);
    });
  });

  context('when one element passed', () => {
    context('and array contains that element', () => {
      it('returns copy of original array without that element', () => {
        const array = [1, 2, 3, 4];
        const element = 4;

        expect(addOrRemove(array, element)).not.toBe(array);
        expect(addOrRemove(array, element)).toEqual([1, 2, 3]);
      });
    });

    context('and array does NOT contain that element', () => {
      it('returns copy of original array with element', () => {
        const array = [1, 2, 3, 4];
        const element = 5;

        expect(addOrRemove(array, element)).not.toBe(array);
        expect(addOrRemove(array, element)).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and array contains all those elements', () => {
      it('returns copy of original array without those elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [4, 5];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1, 2, 3]);
      });
    });

    context('and array contains some of those elements', () => {
      it('returns copy of original array without contained elements and with not contained elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [5, 6];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1, 2, 3, 4, 6]);
      });
    });

    context('and array does NOT contains any of those elements', () => {
      it('returns copy of original array with all those elements', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [6, 7];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });
    });
  });

  context('when array contains duplicates', () => {
    context('and elements contain only elements to remove', () => {
      it('returns copy of original array without duplicates', () => {
        const array = [1, 2, 2, 3, 3];
        const elements = [2, 3];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1]);
      });
    });
  });

  context('when elements contains duplicates', () => {
    context('and array contains some of those elements', () => {
      it('returns copy of original array without contained elements duplicates and with not contained elements duplicates', () => {
        const array = [1, 2, 2, 3, 3];
        const elements = [3, 4, 4];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1, 2, 2, 4, 4]);
      });
    });

    context('and array contains none of those elements', () => {
      it('returns copy of original array with duplicates', () => {
        const array = [1, 2, 3];
        const elements = [4, 4, 5, 5];

        expect(addOrRemove(array, ...elements)).not.toBe(array);
        expect(addOrRemove(array, ...elements)).toEqual([1, 2, 3, 4, 4, 5, 5]);
      });
    });
  });
});
