function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    if (result === "Heads") {
        headsCount++;
    }
    else {
        tailsCount++;
    }
    console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
}

if (headsCount === 11) {
    console.log("Heads wins 11 times!");
}
else if (tailsCount === 11) {
    console.log("Tails wins 11 times!");
}
