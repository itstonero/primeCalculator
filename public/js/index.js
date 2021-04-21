function adjustPrime(retrievedPrime)
{
    console.log(retrievedPrime)
    window.location = `/?primeNumbers=${retrievedPrime.value}`
}