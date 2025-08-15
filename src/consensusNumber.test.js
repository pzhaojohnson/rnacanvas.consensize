import { consensusNumber } from './consensusNumber';

test('`function consensusNumber()`', () => {
  // an empty array of numbers
  expect(() => consensusNumber([])).toThrow();
  expect(() => consensusNumber([], 0)).toThrow();
  expect(() => consensusNumber([], 5)).toThrow();

  // one number
  expect(consensusNumber([5.8319])).toBe(5.8319);
  expect(consensusNumber([5.8319], 0)).toBe(6);
  expect(consensusNumber([5.8319], 2)).toBe(5.83);

  // multiple numbers that are exactly the same
  expect(consensusNumber([9.39133, 9.39133, 9.39133, 9.39133, 9.39133])).toBe(9.39133);
  expect(consensusNumber([9.39133, 9.39133, 9.39133, 9.39133, 9.39133], 0)).toBe(9);
  expect(consensusNumber([9.39133, 9.39133, 9.39133, 9.39133, 9.39133], 3)).toBe(9.391);

  // multiple numbers that round to the same number
  expect(consensusNumber([7.873816, 7.87392, 7.8741, 7.874, 7.873602, 7.87444], 3)).toBe(7.874);
  expect(() => consensusNumber([7.873816, 7.87392, 7.8741, 7.874, 7.873602, 7.87444], 4)).toThrow();

  // one number is different
  expect(() => consensusNumber([-3.9871, -3.9871, -3.9871, -3.9872, -3.9871, -3.9871, -3.9871])).toThrow();
  expect(() => consensusNumber([7.873816, 7.87322, 7.8741, 7.874, 7.873602, 7.87444], 3)).toThrow();

  // decimal places greater than the number of decimal places present
  expect(consensusNumber([9.39133, 9.39133, 9.39133, 9.39133, 9.39133], 15)).toBe(9.39133);
});
