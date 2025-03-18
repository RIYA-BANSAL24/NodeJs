function gamble() {
    let money = 100;
    const goal = 200;
    let betAmount = 1;
    let betsMade = 0;
    let wins = 0;

    while (money > 0 && money < goal) {
        let betResult = Math.random() < 0.5 ? "lose" : "win";
        if (betResult === "win") {
            money += betAmount;
            wins++;
        }
	else {
            money -= betAmount;
        }
        betsMade++;
    }
    if (money === 0) {
        console.log(`Gambler went broke after ${betsMade} bets and ${wins} wins.`);
    }
    else {
        console.log(`Gambler reached the goal of Rs 200 after ${betsMade} bets and ${wins} wins.`);
    }
}

gamble();
