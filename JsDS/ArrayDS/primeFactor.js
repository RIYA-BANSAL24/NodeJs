function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function primeFactors(n) {
    const fact = [];

    while (n % 2 === 0) {
        fact.push(2);
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            if (isPrime(i)) {
                fact.push(i);
            }
            n = n / i;
        }
    }
    if (n > 2 && isPrime(n)) {
        fact.push(n);
    }
    return fact;
}

const n = 56;
console.log(`Prime factors of ${n}:`);

// Get prime factors and store them in an array
const primeFactorsArray = primeFactors(n);

// Display the output
console.log(primeFactorsArray);
