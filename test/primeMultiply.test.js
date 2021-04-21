const primeServices = require('../services/primesManager');

test('extractPrimesMultiples gives a default jagged array of 10 Primes multiples', () => {
    const retrievedPrimes = primeServices.getPrimeNumbers();
    const primes = primeServices.extractPrimesMultiples(retrievedPrimes);
    expect(primes.length).toBe(10);
});