const start = parseInt(process.argv[2]);
const end = parseInt(process.argv[3]);

if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please enter a valid range where both numbers are >= 2 and start <= end.");
    process.exit(1);
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        process.stdout.write(num + " ");
    }
}
console.log();
