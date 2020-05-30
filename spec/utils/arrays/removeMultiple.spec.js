import '@testHelper';

import {
  removeMultipleFirst,

  removeFirst
} from '@utils/arrays';

describe('removeMultipleFirst', () => {
  context('when no elements to remove passed', () => {
    it('returns original array', () => {
      const array = [1, 2, 3, 4, 5];
      const elementsToRemove = [];

      expect(removeMultipleFirst(array, elementsToRemove)).toEqual(array);
    });
  });

  context('when one element to remove passed', () => {
    it('returns copy of original array without that element to remove', () => {
      const array = [1, 2, 3, 4, 5];
      const elementsToRemove = [3];

      expect(removeMultipleFirst(array, elementsToRemove)).toEqual(removeFirst(array, 3));
    })
  });

  context('when sequential elements to remove passed', () => {
    it('returns copy of original array without those sequential elements to remove', () => {
      const array = [1, 2, 3, 4, 5];
      const elementsToRemove = [2, 3];

      expect(removeMultipleFirst(array, elementsToRemove)).toEqual(removeFirst(removeFirst(array, 2), 3));
    })
  });

  context('when non sequential elements to remove passed', () => {
    it('returns copy of original array without those non sequential elements to remove', () => {
      const array = [1, 2, 3, 4, 5];
      const elementsToRemove = [2, 4];

      expect(removeMultipleFirst(array, elementsToRemove)).toEqual(removeFirst(removeFirst(array, 2), 4));
    });
  });

  context('when sequential and non sequential elements to remove passed', () => {
    it('returns copy of original array without those non sequential elements to remove', () => {
      const array = [1, 2, 3, 4, 5];
      const elementsToRemove = [2, 3, 5];

      expect(removeMultipleFirst(array, elementsToRemove)).toEqual(removeFirst(removeFirst(removeFirst(array, 2), 3), 5));
    });
  });
});
