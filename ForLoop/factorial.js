const num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(`${num}! = ${factorial(num)}`);
