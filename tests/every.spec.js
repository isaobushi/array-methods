import {every} from '../src';

/* eslint-disable require-jsdoc */
const numbers = [3, 4, 5, 6];

describe('filter', () => {
  it('should check if the comparisons are true for all the elements in the array', () => {
    function greaterThan2(number) {
      return number > 2;
    }

    const nativeResult = numbers.every(greaterThan2);

    const andreaDashResult = every(numbers, greaterThan2);

    expect(typeof andreaDashResult === 'boolean').toBeTruthy();

    expect(andreaDashResult).toEqual(nativeResult);
  });
});
