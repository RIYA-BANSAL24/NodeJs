function inchesToFeet(inches) {
    return inches / 12;
}
let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

function feetToMeters(feet) {
    return feet * 0.3048;
}
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);
console.log(`Plot size: ${lengthFeet} ft × ${widthFeet} ft = ${lengthMeters.toFixed(2)} m × ${widthMeters.toFixed(2)} m`);

function squareFeetToAcres(sqFeet) {
    return sqFeet / 43560;
}
let areaSqFeet = lengthFeet * widthFeet;
let totalAreaSqFeet = areaSqFeet * 25;
let totalAreaAcres = squareFeetToAcres(totalAreaSqFeet);
console.log(`Total area of 25 plots = ${totalAreaAcres.toFixed(2)} acres`);
