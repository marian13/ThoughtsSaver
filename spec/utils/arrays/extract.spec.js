import '@specHelper';

import { extract } from '@utils/arrays';

describe('extract', () => {
  context('when no elements passed', () => {
    it('returns empty array as extracted', () => {
      const array = [1, 2, 3, 4, 5];

      const [extracted, _nonextracted] = extract(array);

      expect(extracted).toEqual([]);
    });

    it('returns original array as nonextracted', () => {
      const array = [1, 2, 3, 4, 5];

      const [_extracted, nonextracted] = extract(array);

      expect(nonextracted).toBe(array);
    });
  });

  context('when one element passed', () => {
    context('and array contains that element', () => {
      it('returns new array with that element as extracted', () => {
        const array = [1, 2, 3, 4, 5];
        const element = 4;

        const [extracted, _nonextracted] = extract(array, element);

        expect(extracted).toEqual([4]);
      });

      it('returns new array without that element as nonextracted', () => {
        const array = [1, 2, 3, 4, 5];
        const element = 4;

        const [_extracted, nonextracted] = extract(array, element);

        expect(nonextracted).toEqual([1, 2, 3, 5]);
      });
    });
  });

  context('when multiple elements passed', () => {
    context('and array contains all those elements', () => {
      it('returns new array with all those elements as extracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [3, 4];

        const [extracted, _nonextracted] = extract(array, ...elements);

        expect(extracted).toEqual([3, 4]);
      });

      it('returns new array without all those elements as nonextracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [3, 4];

        const [_extracted, nonextracted] = extract(array, ...elements);

        expect(nonextracted).toEqual([1, 2, 5]);
      });
    });

    context('and array contains some of those element', () => {
      it('returns new array with those some elements as extracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [4, 6];

        const [extracted, _nonextracted] = extract(array, ...elements);

        expect(extracted).toEqual([4]);
      });

      it('returns new array without those some elements as nonextracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [4, 6];

        const [_extracted, nonextracted] = extract(array, ...elements);

        expect(nonextracted).toEqual([1, 2, 3, 5]);
      });
    });

    context('and array does NOT contains any of those element', () => {
      it('returns new array as extracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [6, 7];

        const [extracted, _nonextracted] = extract(array, ...elements);

        expect(extracted).toEqual([]);
      });

      it('returns copy of original array as nonextracted', () => {
        const array = [1, 2, 3, 4, 5];
        const elements = [6, 7];

        const [_extracted, nonextracted] = extract(array, ...elements);

        expect(nonextracted).not.toBe(array);
        expect(nonextracted).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  context('when array contains duplicates', () => {
    it('returns new array with duplicates as extracted', () => {
      const array = [1, 2, 2, 3, 3];
      const elements = [2, 3];

      const [extracted, _nonextracted] = extract(array, ...elements);

      expect(extracted).toEqual([2, 2, 3, 3]);
    });

    it('returns new array without duplicates as nonextracted', () => {
      const array = [1, 2, 2, 3, 3];
      const elements = [2, 3];

      const [_extracted, nonextracted] = extract(array, ...elements);

      expect(nonextracted).toEqual([1]);
    });
  });
});
