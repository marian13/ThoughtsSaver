import '@testHelper';

import {
  findAndRemove,

  remove
} from '@utils/arrays';

describe('findAndRemove', () => {
  context('when element is NOT in array', () => {
    it('returns original array', () => {
      const array = [1, 2, 3, 4, 5];
      const element = 6;

      const [updatedArray, _foundElement] = findAndRemove(array, element);

      expect(updatedArray).toEqual(array);
    });

    it('returns null as found element', () => {
      const array = [1, 2, 3, 4, 5];
      const element = 6;

      const [_updatedArray, foundElement] = findAndRemove(array, element);

      expect(foundElement).toEqual(null);
    });
  });

  context('when element is in array', () => {
    it('returns copy of original array with removed element', () => {
      const array = [1, 2, 3, 4, 5];
      const element = 3;

      const [updatedArray, _foundElement] = findAndRemove(array, element);

      expect(updatedArray).toEqual(remove(array, element));
    });

    it('returns original element as found element', () => {
      const array = [1, 2, 3, 4, 5];
      const element = 3;

      const [_updatedArray, foundElement] = findAndRemove(array, element);

      expect(foundElement).toEqual(element);
    });
  });
});

