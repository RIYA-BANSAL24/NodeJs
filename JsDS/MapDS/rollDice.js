function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function dieRollExperiment() {
    const results = {};
    let maxReached = false;

    while (!maxReached) {
        const num = rollDie();

        if (results[num]) {
            results[num]++;
        }
	else {
            results[num] = 1;
        }

        if (results[num] === 10) {
            maxReached = true;
        }
    }

    return results;
}

function findMaxAndMin(results) {
    let maxNum = null;
    let maxCount = -Infinity;
    let minNum = null;
    let minCount = Infinity;

    for (const [num, count] of Object.entries(results)) {
        if (count > maxCount) {
            maxNum = num;
            maxCount = count;
        }
        if (count < minCount) {
            minNum = num;
            minCount = count;
        }
    }

    return { maxNum, maxCount, minNum, minCount };
}

const results = dieRollExperiment();
console.log("Results of die rolls:", results);

const { maxNum, maxCount, minNum, minCount } = findMaxAndMin(results);
console.log(`Number ${maxNum} reached the maximum times: ${maxCount}`);
console.log(`Number ${minNum} reached the minimum times: ${minCount}`);
