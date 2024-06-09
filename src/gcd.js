// mathUtils.js
export function gcd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Inputs must be numbers');
    if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error('Inputs must be integers');
    if (a < 0 || b < 0) throw new Error('Inputs must be non-negative');
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
  