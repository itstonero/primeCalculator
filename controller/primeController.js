import { extractPrimesMultiples, getPrimeNumbers } from "../services/primesManager";

export function generatePrimeMultiples(bucketSize)
{
    const primes = getPrimeNumbers(bucketSize);
    const multiples = extractPrimesMultiples(primes)
    const result = {
        headers: primes,
        values: primes.reduce((reducer, prime, index) => ({...reducer, [prime]: multiples[index]}), {})
    }
    return result;
}