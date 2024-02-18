/**
 * If all of the values are the same value
 * (as determined using the Set constructor),
 * this function will return that value.
 *
 * Otherwise, this function will throw.
 *
 * This function will also throw for an empty array of values.
 */
export function consensusValue<T>(values: T[]): T | never {
  if (values.length == 0) {
    throw new Error('The array of values is empty.');
  }

  let uniqueValues = new Set(values);

  if (uniqueValues.size == 1) {
    return values[0];
  } else {
    throw new Error('Not all values are the same.');
  }
}
