import '@specHelper';

import { any } from '@utils/arrays';
import { AnyFunctionError } from '@utils/arrays/any';

describe('any', () => {
  context('when no function passed', () => {
    context('and array is empty', () => {
      it('returns false', () => {
        const array = [];

        expect(any(array)).toEqual(false);
      });
    });

    context('and array is NOT empty', () => {
      it('returns false', () => {
        const array = [1];

        expect(any(array)).toEqual(true);
      });
    });
  });

  context('when function passed', () => {
    context('and function is not function', () => {
      it('throws AnyFunctionError', () => {
        const array = [];
        const func = 45;

        expect(() =>any(array, func)).toThrowError(new AnyFunctionError('Function passed to any is not a function.'));
      });
    });

    context('no element for function returns truthy value', () => {
      it('returns false', () => {
        const array = [1, 2, 3, 4, 5];
        const func = number => number > 6;

        expect(any(array, func)).toEqual(false);
      });
    });

    context('at least one element for function return truthy value', () => {
      it('returns false', () => {
        const array = [1, 2, 3, 4, 5];
        const func = number => number > 3;

        expect(any(array, func)).toEqual(true);
      });
    });
  });
});
