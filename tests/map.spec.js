import {map} from '../src'

const numbers = [1,2,3,4,5];

describe('map', () => {
  it('should map each number and multiply by 2', () => {
    function doubleNumbers(number) {
      return number*2;
    }

    const nativeResult = numbers.map(doubleNumbers);

    const andreaDashResult = map(numbers, doubleNumbers)

    expect(andreaDashResult.length).toEqual(nativeResult.length)

    for (let i = 0; i < andreaDashResult.length; i++) {
      expect(andreaDashResult[i]).toEqual(nativeResult[i]);
    }
  });
});
