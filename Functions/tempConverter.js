const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Select Temperature Conversion:");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");

rl.question("Enter your choice (1-2): ", function(choice) {
    rl.question("Enter the temperature value: ", function(value) {
        value = parseFloat(value);
        let result;

        switch (parseInt(choice)) {
            case 1:
                if (value < 0 || value > 100) {
                    console.log("Please enter a Celsius value between 0°C and 100°C.");
                }
		else {
                    result = (value * 9/5) + 32;
                    console.log(`${value}°C = ${result.toFixed(2)}°F`);
                }
                break;
            case 2:
                if (value < 32 || value > 212) {
                    console.log("Please enter a Fahrenheit value between 32°F and 212°F.");
                }
		else {
                    result = (value - 32) * 5/9;
                    console.log(`${value}°F = ${result.toFixed(2)}°C`);
                }
                break;
            default:
                console.log("Invalid choice. Please select 1 or 2.");
        }

        rl.close();
    });
});
