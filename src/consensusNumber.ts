import { consensusValue } from './consensusValue';

import { round } from '@rnacanvas/math';

export function consensusNumber(ns: number[], decimalPlaces?: number): number | never {
  if (decimalPlaces === undefined) {
    return consensusValue(ns);
  } else {
    return consensusValue(ns.map(n => round(n, decimalPlaces)));
  }
}
