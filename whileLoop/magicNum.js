const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let low = 1;
let high = 100;
let guess = Math.floor((low + high) / 2);

console.log("Think of a number between 1 and 100.");

while (low < high) {
    rl.question(`Is your number greater than ${guess}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === 'yes') {
            low = guess + 1;
        }
	else if (answer.toLowerCase() === 'no') {
            high = guess - 1;
        }
	else {
            console.log("Please answer with 'yes' or 'no'.");
            rl.close();
            return;
        }

        guess = Math.floor((low + high) / 2);

        if (low === high) {
            console.log(`The magic number is ${low}!`);
            rl.close();
        }
    });
}
