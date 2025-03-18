const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a number greater than 1.");
    process.exit(1);
}

let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is a Prime Number.`);
}
else {
    console.log(`${num} is NOT a Prime Number.`);
}
