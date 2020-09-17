import { calculatePreviousPrimeNumber } from 'utils/math';

describe('calculatePreviousPrimeNumber', function () {
  it('should return correct previous prime number', function () {
    expect(calculatePreviousPrimeNumber(0)).toBe(null);
    expect(calculatePreviousPrimeNumber(1)).toBe(null);
    expect(calculatePreviousPrimeNumber(2)).toBe(null);
    expect(calculatePreviousPrimeNumber(3)).toBe(2);
    expect(calculatePreviousPrimeNumber(4)).toBe(3);
    expect(calculatePreviousPrimeNumber(5)).toBe(3);
    expect(calculatePreviousPrimeNumber(6)).toBe(5);
    expect(calculatePreviousPrimeNumber(7)).toBe(5);
    expect(calculatePreviousPrimeNumber(10)).toBe(7);
    expect(calculatePreviousPrimeNumber(16)).toBe(13);
    expect(calculatePreviousPrimeNumber(57)).toBe(53);
    expect(calculatePreviousPrimeNumber(100)).toBe(97);
  });
});
