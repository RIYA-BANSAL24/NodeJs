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

function findNum(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least 2 elements");
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        }
	else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        }
	else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

const { secondLargest, secondSmallest } = findNum(randNumArray);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
