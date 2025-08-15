# Installation

With `npm`:

```
npm install @rnacanvas/consensize
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// some example imports
import { consensusValue } from '@rnacanvas/consensize';
import { consensusNumber } from '@rnacanvas/consensize';
import { mostCommonValue } from '@rnacanvas/consensize';
```

## `function consensusValue()`

If all values of the passed in array are the same, returns that value.
Otherwise, throws.

(Also throws for an empty array of values.)

Value equality is checked for using the `Set` class.

```javascript
consensusValue([3, 3, 3]); // 3
consensusValue(['b', 'b', 'b', 'b']); // "b"

// one value is different
consensusValue([3, 3, 2, 3]); // throws
consensusValue(['b', 'a', 'b']); // throws

// an empty array of valeus
consensusValue([]); // throws
```

## `function consensusNumber()`

If all numbers are the same, returns that number.
Otherwise, throws.

Takes as a second argument the number of decimal places to round to
(optional - by default numbers are not rounded).

(This function does not modify the input array of numbers.)

```javascript
// all the same number
consensusNumber([5, 5, 5, 5, 5, 5]); // 5

// rounding numbers to 3 decimal places
consensusNumber([5.8363, 5.8357, 5.8359], 3); // 5.836

// one number is different
consensusNumber([5, 5, 5, 6, 5, 5]); // throws

// the second number does not round to 5.836
consensusNumber([5.8361, 5.8366, 5.8357], 3); // throws
```

## `function mostCommonValue()`

Returns the most common value in the passed in array.

If two or more values are tied for being the most common value,
then one of these values is returned,
though it's not firmly defined which is returned.

Equality between values is checked for using the `Set` class.

Throws for an empty array of values.

```javascript
mostCommonValue([6, 5, 1, 6, 6, 2, 3, 6]); // 6
mostCommonValue(['a', 'b', 'b', 'g', 'e', 'b']); // "b"

// multiple most common values
// (it is undefined which one is returned
mostCommonValue([1, 2, 2, 3, 3, 4]); // 2 or 3
mostCommonValue(['b', 'e', 'f']); // "b", "e" or "f"

// an empty array of values
mostCommonValue([]); // throws
```
