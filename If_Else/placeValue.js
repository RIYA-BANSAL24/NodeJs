let num = parseInt(process.argv[2]);

let placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore",
    100000000: "Ten Crore"
};

if (placeValues[num]) {
    console.log(`The place value is: ${placeValues[num]}`);
}
else {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
}
