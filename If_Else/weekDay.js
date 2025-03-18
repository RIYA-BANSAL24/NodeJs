let dayNumber = parseInt(process.argv[2]);

let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(`The day is: ${weekDays[dayNumber - 1]}`);
}
else {
    console.log("Please enter a number between 1 and 7.");
}
