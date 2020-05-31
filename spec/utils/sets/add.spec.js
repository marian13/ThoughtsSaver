import '@specHelper';

import { add, createSet } from '@utils/sets';

describe('add', () => {
  context('when no elements passed', () => {
    it('returns original set', () => {
      const set = createSet([1, 2, 3]);

      expect(add(set)).toBe(set);
    });
  });

  context('when one element passed', () => {
    it('returns copy of original set with that element', () => {
      const set = createSet([1, 2, 3]);
      const element = 4;

      expect(add(set, element)).not.toBe(set);
      expect(add(set, element)).toEqual(createSet([1, 2, 3, 4]));
    });
  });

  context('when multiple elements passed', () => {
    it('returns copy of original set with those elements', () => {
      const set = createSet([1, 2, 3]);
      const elements = [4, 5];

      expect(add(set, ...elements)).not.toBe(set);
      expect(add(set, ...elements)).toEqual(createSet([1, 2, 3, 4, 5]));
    });
  });
});
