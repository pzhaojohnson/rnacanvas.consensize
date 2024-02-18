import { mostCommonValue } from './mostCommonValue';

describe('mostCommonValue function', () => {
  test('an empty array of values', () => {
    let values = [];

    expect(() => mostCommonValue(values)).toThrow();
  });

  test('an array of one value', () => {
    let values = [892.3718];

    expect(mostCommonValue(values)).toBe(892.3718);
  });

  test('an array of twelve values with one most common value', () => {
    let values = ['j', 'f', 'n', 'e', 'e', 'j', 'e', '3', 'g', 'e', 'm', 'n'];

    expect(values.length).toBe(12);

    expect(mostCommonValue(values)).toBe('e');
  });

  test('an array of fourteen values with three most common values', () => {
    let values = [3, 5, 9, 2, 1, 9, 2, 9, 8, 7, 2, 7, 7, 0];

    expect(values.length).toBe(14);

    expect([9, 2, 7].includes(mostCommonValue(values))).toBeTruthy();
  });

  test('an array of eight unique values', () => {
    let values = ['a', 'b', 'c', 'd', 5, 6, 7, 8];

    expect(values.length).toBe(8);

    expect(values.includes(mostCommonValue(values))).toBeTruthy();
  });
});
