import '#/specHelper';

import { none } from '~/utils/arrays';

describe('none', () => {
  context('when array is empty', () => {
    it('returns true', () => {
      const array = [];

      expect(none(array)).toEqual(true);
    });
  });

  context('when array is NOT empty', () => {
    it('returns false', () => {
      const array = [1];

      expect(none(array)).toEqual(false);
    });
  });
});
