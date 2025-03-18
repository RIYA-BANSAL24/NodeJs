let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let results = [result1, result2, result3, result4];

let maxValue = Math.max(...results);
let minValue = Math.min(...results);

console.log(`1. a + b * c = ${result1}`);
console.log(`2. a % b + c = ${result2}`);
console.log(`3. c + a / b = ${result3}`);
console.log(`4. a * b + c = ${result4}`);
console.log(`Maximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);
