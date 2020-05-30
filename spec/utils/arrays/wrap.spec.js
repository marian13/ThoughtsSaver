import '@specHelper';

import { wrap } from '@utils/arrays';

describe('wrap', () => {
  context('when object is undefined', () => {
    it('returns empty array', () => {
      const object = undefined;

      expect(wrap(object)).toEqual([]);
    });
  });

  context('when object is null', () => {
    it('returns empty array', () => {
      const object = null;

      expect(wrap(object)).toEqual([]);
    });
  });

  context('when object is array', () => {
    it('returns that array', () => {
      const object = [1, 2, 3];

      expect(wrap(object)).toEqual([1, 2, 3]);
    });
  });

  it('returns object wrapped by array', () => {
    const object = 'string';

    expect(wrap(object)).toEqual(['string']);
  });
});

