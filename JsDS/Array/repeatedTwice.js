function findRepeatedDigits(start, end) {
    const repeatedDigitsArray = [];

    for (let i = start; i <= end; i++) {
        const numStr = i.toString();

        if (numStr.length === 2 && numStr[0] === numStr[1]) {
            repeatedDigitsArray.push(i);
        }
    }
    return repeatedDigitsArray;
}

const start = 0;
const end = 100;

const repeatedDigits = findRepeatedDigits(start, end);

console.log("Numbers with repeated digits between", start, "and", end, "are:");
console.log(repeatedDigits);
