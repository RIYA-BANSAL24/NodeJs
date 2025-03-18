// powersOfTwo.js

// Read the command-line argument for 'n'
const n = parseInt(process.argv[2]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

let power = 1;
let i = 0;

console.log(`Powers of 2 up to 2^${n}:`);
while (power <= 256 && i <= n) {
    console.log(`2^${i} = ${power}`);
    i++;
    power *= 2;
}
