function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100;
}

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigit());
}

let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log("Generated Numbers: " + numbers.join(", "));
console.log("Minimum Value: " + minValue);
console.log("Maximum Value: " + maxValue);
