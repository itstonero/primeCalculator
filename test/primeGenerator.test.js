const primeServices = require('../services/primesManager');

test('getPrimeNumbers(3) gives an array of 3 Primes', () => {
  const primes = primeServices.getPrimeNumbers(3);
  expect(primes.length).toBe(3);
});

test('getPrimeNumbers() gives a default array of 10 Primes', () => {
  const primes = primeServices.getPrimeNumbers(10);
  expect(primes.length).toBe(10);
});

test('getPrimeNumbers(0) gives an array of 0 Primes', () => {
  const primes = primeServices.getPrimeNumbers(0);
  expect(primes.length).toBe(0);
});

test('getPrimeNumbers(10) gives an array of 10 Primes', () => {
  const primes = primeServices.getPrimeNumbers(10);
  expect(primes.length).toBe(10);
});