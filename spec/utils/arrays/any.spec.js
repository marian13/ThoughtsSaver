import '@specHelper';

import { any } from '@utils/arrays';

describe('any', () => {
  context('when array is empty', () => {
    it('returns false', () => {
      const array = [];

      expect(any(array)).toEqual(false);
    });
  });

  context('when array is NOT empty', () => {
    it('returns false', () => {
      const array = [1];

      expect(any(array)).toEqual(true);
    });
  });
});
