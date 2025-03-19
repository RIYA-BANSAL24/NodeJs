function genBirthMonth() {
    return Math.floor(Math.random() * 12) + 1;
}

function genBirthMonthForIndividual() {
    const birthMonths = [];
    for (let i = 0; i < 50; i++) {
        birthMonths.push(genBirthMonth());
    }
    return birthMonths;
}

function groupIndividualByBirthMonth(birthMonths) {
    const monthMap = {};

    for (let i = 0; i < birthMonths.length; i++) {
        const month = birthMonths[i];
        if (!monthMap[month]) {
            monthMap[month] = [];
        }
        monthMap[month].push(i + 1);
    }

    return monthMap;
}

function printIndividualByBirthMonth(monthMap) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (const [month, individuals] of Object.entries(monthMap)) {
        console.log(`Individuals with birthdays in ${monthNames[month - 1]}: ${individuals.join(", ")}`);
    }
}

const birthMonths = genBirthMonthForIndividual();
console.log("Generated birth months for 50 individuals:", birthMonths);

const monthMap = groupIndividualByBirthMonth(birthMonths);
printIndividualByBirthMonth(monthMap);
