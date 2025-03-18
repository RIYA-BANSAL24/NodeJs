const num = parseInt(process.argv[2]);

if (isNaN(num) || num <= 1) {
    console.log("Please enter a valid integer greater than 1.");
    process.exit(1);
}

function primeFactors(n) {
    let factors = [];
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    let i = 3;
    while (i * i <= n) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
        i += 2;
    }

    if (n > 2) {
        factors.push(n);
    }
    return factors;
}

const factors = primeFactors(num);
console.log(`Prime factors of ${num}: ${factors.join(' ')}`);
