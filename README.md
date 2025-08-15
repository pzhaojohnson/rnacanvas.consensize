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

Values are compared using the `has()` method of the `Set` class.

```javascript
consensusValue([3, 3, 3]); // 3
consensusValue(['b', 'b', 'b', 'b']); // "b"

// one value is different
consensusValue([3, 3, 2, 3]); // throws
consensusValue(['b', 'a', 'b']); // throws

// an empty array of valeus
consensusValue([]); // throws
```
