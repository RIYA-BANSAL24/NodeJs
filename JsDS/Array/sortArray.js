function generateRandNum() {
    const num = [];
    for (let i = 0; i < 10; i++) {
        const randNum = Math.floor(Math.random() * 900) + 100;
        num.push(randNum);
    }
    return num;
}

const randNumArray = generateRandNum();
console.log("Generated Numbers:", randNumArray);

const sortedArray = randNumArray.slice().sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedArray);

function findNum(sortedArr) {
    if (sortedArr.length < 2) {
        throw new Error("Array must contain at least 2 elements");
    }

    const secondSmallest = sortedArr[1];
    const secondLargest = sortedArr[sortedArr.length - 2];

    return { secondLargest, secondSmallest };
}

const { secondLargest, secondSmallest } = findNum(sortedArray);
console.log("Second Largest from sorted array:", secondLargest);
console.log("Second Smallest from sorted array:", secondSmallest);
