import '#/specHelper';

import { copySet, createSet } from '~/utils/sets';

describe('copySet', () => {
  it('returns copy of original set', () => {
    const set = createSet(['a', 'b', 'c']);

    const copy = copySet(set);

    expect(copy).toEqual(new Set(['a', 'b', 'c']));
    expect(copy).not.toBe(set);
  });
});
