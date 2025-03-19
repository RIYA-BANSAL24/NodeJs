function findTriplets(arr) {
    const triplets = [];
    const n = arr.length;

    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);

                while (left < right && arr[left] === arr[left + 1]) left++;

                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            }
	    else if (sum < 0) {
                left++;
            }
	    else {
                right--;
            }
        }
    }

    return triplets;
}

const arr = [0, -1, 2, -3, 1, -2, 3];
console.log("Input Array:", arr);

const result = findTriplets(arr);

if (result.length > 0) {
    console.log("Triplets that sum to zero:");
    result.forEach(triplet => console.log(triplet));
}
else {
    console.log("No triplets found that sum to zero.");
}
