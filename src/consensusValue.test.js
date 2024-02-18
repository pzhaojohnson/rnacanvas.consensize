import { consensusValue } from './consensusValue';

describe('consensusValue function', () => {
  test('an empty array of values', () => {
    let values = [];

    expect(() => consensusValue(values)).toThrow();
  });

  test('an array of one value', () => {
    let values = ['8b'];

    expect(consensusValue(values)).toBe('8b');
  });

  test('an array of five values that are all the same', () => {
    let values = [16.3271, 16.3271, 16.3271, 16.3271, 16.3271];

    expect(values.length).toBe(5);

    expect(consensusValue(values)).toBe(16.3271);
  });

  test('an array of eight values where one is different', () => {
    let values = ['a83jEL', 'a83jEL', 'a83jEL', 'a83jEL', 'a83jEL', 'a82jEL', 'a83jEL', 'a83jEL'];

    expect(values.length).toBe(8);

    expect(() => consensusValue(values)).toThrow();
  });
});
