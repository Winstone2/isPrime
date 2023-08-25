function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));    // Output: true (7 is a prime number)
console.log(isPrime(16));   // Output: false (16 is not a prime number)
console.log(isPrime(19));   // Output: true (19 is a prime number)
console.log(isPrime(1));    // Output: false (1 is not a prime number)
console.log(isPrime(100));  // Output: false (100 is not a prime number)
