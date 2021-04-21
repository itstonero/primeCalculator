
export function getPrimeNumbers(bucketSize = 10, numberRange = 100)
{
    let primes = [2];
    let allNumbers = Array.from(Array(numberRange).keys())

    for(let i = 3; i < numberRange; i++)
    {
        if(primes.length >= bucketSize)
        {
            break;
        }

        if(primes.filter(x => (allNumbers[i] % x) == 0).length == 0)
        {
            primes.push(allNumbers[i]);
        }
    }

    if(primes.length > bucketSize) primes.length = bucketSize;

    return primes;
}

export function extractPrimesMultiples(primes)
{
    let primeMultiplies = primes.map(x => []);
    let primeSize = primes.length;

    primes.map((prime, index) => {
        for(let startIndex = index; startIndex < primeSize; startIndex++)
        {
            let currentPrimeMultiple = prime * primes[startIndex];
            primeMultiplies[index].push(currentPrimeMultiple)
            if(index != startIndex) primeMultiplies[startIndex].push(currentPrimeMultiple)
        }
    });

    return primeMultiplies;
}