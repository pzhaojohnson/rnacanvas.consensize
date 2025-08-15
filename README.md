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

If all values are the same, returns that value.
Otherwise, throws.

(Also throws for an empty array of values.)

Values are determined to be equal or not using the `Set` class.

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

The number of decimal places to round the numbers to can also be given as a second argument.
(By default the numbers are not rounded.)

(This function does not modify the input array of numbers in any way.)

```javascript
// all the same number
consensusNumber([5, 5, 5, 5, 5, 5]); // 5

// rounding numbers to 3 decimal places
consensusNumber([5.8361, 5.8363, 5.8357, 5.8359], 3); // 5.836

// one value is different
consensusNumber([5, 5, 5, 6, 5, 5]); // throws

// the second value does not round to 5.836
consensusNumber([5.8361, 5.8366, 5.8357, 5.8359], 3); // throws
```

## `function mostCommonValue()`

Returns the most common value.

If two or more values are tied for most common value,
this function returns one of the most common values
though it's not firmly defined which most common value is returned in this case.

Values are determined to be the same or not using the `Set` class.

Throws for an empty array of values.

```javascript
// arrays with multiple values
mostCommonValue([6, 5, 1, 6, 6, 2, 3, 6]); // 6
mostCommonValue(['a', 'b', 'c' 'b', 'g', 'e', 'b']); // "b"

// multiple most common values (it is undefined which one is returned
mostCommonValue([2, 2, 2, 3, 3, 3]); // 2 or 3
mostCommonValue(['b', 'e', 'b', 'e']); // "b" or "e"

// an empty array of values
mostCommonValue([]); // throws
```
