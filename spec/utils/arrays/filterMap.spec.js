import '@specHelper';

import { filterMap } from '@utils/arrays';

describe('filterMap', () => {
  context('when array is empty', () => {
    it('returns new empty array', () => {
      const array = [];
      const filterMapFunction = () => {};

      expect(filterMap(array, filterMapFunction)).not.toBe(array);
      expect(filterMap(array, filterMapFunction)).toEqual([]);
    });
  });

  context('when array is NOT empty', () => {
    it('returns new array with truthy results of running filterMapFunction for every element in array', () => {
      const array = [1, 2, 3, 4, 5, 6];
      const filterMapFunction = number => {
        if (number % 2 === 0) return number;
      };

      expect(filterMap(array, filterMapFunction));
      expect(filterMap(array, filterMapFunction)).toEqual([2, 4, 6]);
    });
  });

  it('supports index as second parametr to filterMapFunction', () => {
    const array = ['a', 'B', 'c', 'D', 'e', 'F'];
    const filterMapFunction = (letter, index) => {
      if (letter === letter.toUpperCase()) return index;
    };

    expect(filterMap(array, filterMapFunction));
    expect(filterMap(array, filterMapFunction)).toEqual([1, 3, 5]);
  });
});
