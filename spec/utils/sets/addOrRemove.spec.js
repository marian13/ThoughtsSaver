import '#/specHelper';

import { addOrRemove, createSet } from '~/utils/sets';

describe('addOrRemove', () => {
  context('when no elements passed', () => {
    it('returns original set', () => {
      const set = createSet([1, 2, 3]);

      expect(addOrRemove(set)).toBe(set);
    });
  });

  context('when one element passed', () => {
    context('and set contains that element', () => {
      it('returns copy of original set without that element', () => {
        const set = createSet([1, 2, 3, 4]);
        const element = 4;

        expect(addOrRemove(set, element)).not.toBe(set);
        expect(addOrRemove(set, element)).toEqual(createSet([1, 2, 3]));
      });
    });

    context('and set does NOT contain that element', () => {
      it('returns copy of original set with element', () => {
        const set = createSet([1, 2, 3, 4]);
        const element = 5;

        expect(addOrRemove(set, element)).not.toBe(set);
        expect(addOrRemove(set, element)).toEqual(createSet([1, 2, 3, 4, 5]));
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and set contains all those elements', () => {
      it('returns copy of original set without those elements', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [4, 5];

        expect(addOrRemove(set, ...elements)).not.toBe(set);
        expect(addOrRemove(set, ...elements)).toEqual(createSet([1, 2, 3]));
      });
    });

    context('and set contains some of those elements', () => {
      it('returns copy of original set without contained elements and with not contained elements', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [5, 6];

        expect(addOrRemove(set, ...elements)).not.toBe(set);
        expect(addOrRemove(set, ...elements)).toEqual(createSet([1, 2, 3, 4, 6]));
      });
    });

    context('and set does NOT contains any of those elements', () => {
      it('returns copy of original set with all those elements', () => {
        const set = createSet([1, 2, 3, 4, 5]);
        const elements = [6, 7];

        expect(addOrRemove(set, ...elements)).not.toBe(set);
        expect(addOrRemove(set, ...elements)).toEqual(createSet([1, 2, 3, 4, 5, 6, 7]));
      });
    });
  });
});
