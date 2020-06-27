import '#/specHelper';

import { remove, createSet } from '~/utils/sets';

describe('remove', () => {
  context('when no elements passed', () => {
    it('returns original set', () => {
      const set = createSet([1, 2, 3]);

      expect(remove(set)).toBe(set);
    });
  });

  context('when one element passed', () => {
    context('and set contains that element', () => {
      it('returns copy of original set without that element', () => {
        const set = createSet([1, 2, 3, 4]);
        const element = 4;

        expect(remove(set, element)).not.toBe(set);
        expect(remove(set, element)).toEqual(createSet([1, 2, 3]));
      });
    });

    context('and set does NOT contain that element', () => {
      it('returns copy of original set', () => {
        const set = createSet([1, 2, 3, 4]);
        const element = 5;

        expect(remove(set, element)).not.toBe(set);
        expect(remove(set, element)).toEqual(createSet([1, 2, 3, 4]));
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and set contains all those elements', () => {
      it('returns copy of original set without those elements', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [4, 5];

        expect(remove(set, ...elements)).not.toBe(set);
        expect(remove(set, ...elements)).toEqual(createSet([1, 2, 3]));
      });
    });

    context('and set contains some of those element', () => {
      it('returns copy of original set without those some elements', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [5, 6];

        expect(remove(set, ...elements)).not.toBe(set);
        expect(remove(set, ...elements)).toEqual(createSet([1, 2, 3, 4]));
      });
    });

    context('and set does NOT contains any of those element', () => {
      it('returns copy of original set', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [6, 7];

        expect(remove(set, ...elements)).not.toBe(set);
        expect(remove(set, ...elements)).toEqual(createSet([1, 2, 3, 4, 5]));
      });
    });
  });

  context('when set contains duplicates', () => {
    it('returns copy of original set without duplicates', () => {
      const set = createSet([1, 2, 2, 3, 3]);
      const elements = [2, 3];

      expect(remove(set, ...elements)).not.toBe(set);
      expect(remove(set, ...elements)).toEqual(createSet([1]));
    });
  });
});
