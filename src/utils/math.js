import { lastIndexOf, range, fill } from 'lodash';

const generateIsPrimeNumbers = n => {
  const results = fill(range(n), true);
  results[0] = false;
  results[1] = false;
  let i = 2;
  while (i <= Math.sqrt(n)) {
    if (results[i]) {
      let j = i * i;
      while (j < n) {
        results[j] = false;
        j += i;
      }
    }
    i += 1;
  }
  return results;
};

export const calculatePreviousPrimeNumber = n => {
  // TODO: cache isPrimeNumbers, so that if n <= last n, it won't be recalculated.
  if (isNaN(n)) {
    return null;
  }

  if (n <= 2) {
    return null;
  }

  const isPrimeNumbers = generateIsPrimeNumbers(n);
  return lastIndexOf(isPrimeNumbers, true);
};
