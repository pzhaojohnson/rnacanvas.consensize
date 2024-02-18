import { max } from '@rnacanvas/math';

class Occurrences {
  static of<T>(targetValue: T) {
    return {
      /**
       * Returns an array of all occurrences of the target value
       * in the given array of values.
       */
      in: (values: T[]): T[] => {
        let s = new Set([targetValue]);

        // use the Set class to check for equality
        return values.filter(v => s.has(v));
      },
    };
  }
}

/**
 * Returns the most common value in the array of values.
 *
 * Uses the Set class to check for equality among values.
 *
 * If multiple values are tied for most common value,
 * it is not firmly defined which one of them is returned,
 * though one of these most common values will be returned.
 *
 * Throws for an empty array of values.
 */
export function mostCommonValue<T>(values: T[]): T | never {
  if (values.length == 0) {
    throw new Error('The array of values is empty.');
  }

  let uniqueValues = [...(new Set(values))];

  let counts = uniqueValues.map(uv => Occurrences.of(uv).in(values).length);

  let maxCount = max(counts);

  let i = uniqueValues.findIndex(uv => Occurrences.of(uv).in(values).length == maxCount);

  if (i < 0) {
    throw new Error('Unable to find the most common value.');
  } else {
    return uniqueValues[i];
  }
}
