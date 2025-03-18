const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function isPalindromePrime(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindromeNum = getPalindrome(num);
    
    if (isPrime(palindromeNum)) {
        console.log(`${num} is a prime number and its palindrome ${palindromeNum} is also prime.`);
    }
    else {
        console.log(`${num} is a prime number but its palindrome ${palindromeNum} is not prime.`);
    }
}

rl.question("Enter a number: ", function(input) {
    let num = parseInt(input);
    
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    }
   else {
        isPalindromePrime(num);
    }
    
    rl.close();
});
