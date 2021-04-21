const primeService = require("../services/primesManager");

function generatePrimeMultiples(bucketSize)
{
    const primes = primeService.getPrimeNumbers(bucketSize);
    const multiples = primeService.extractPrimesMultiples(primes)
    return primes.map((x,i) => ({ header: `${x}`, values: multiples[i]}));
}

module.exports = { generatePrimeMultiples }