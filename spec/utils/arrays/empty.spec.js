import '#/specHelper';

import { empty } from '~/utils/arrays';

describe('empty', () => {
  context('when array is empty', () => {
    it('returns true', () => {
      const array = [];

      expect(empty(array)).toEqual(true);
    });
  });

  context('when array is NOT empty', () => {
    it('returns false', () => {
      const array = [1];

      expect(empty(array)).toEqual(false);
    });
  });
});
